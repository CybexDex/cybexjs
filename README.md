# CybexJS
## 基本说明
CybexJS库用于包装直接Cybex链进行交互接口与逻辑。其中包含两个独立的NPM包——**cybexjs**与**cybexjs-ws**。其中cybexjs-ws包用以管理客户端与Cybex节点之间的Websocket链接，以提供底层的**API查询**/**消息订阅**与**Transaction广播上链**的实现；而cybexjs库则提供了与ECC/Serialize有关的方法，并提供了相关的辅助工具，用以完成**公私钥生成管理**/**Transaction构造**/**签名验签**等基础功能。此外还提供了工具类**ChainStore**，用以提供链上信息的快捷查询和本地化缓存。

## 使用方法
### 安装
```
yarn add cybexjs
```

可以通过CommonJS或ES import方式获取所需的工具类，如

```
import { Apis } from "cybexjs-ws";	
import { ChainStore } from "cybexjs";
```
或

```
const { CybexStore } = require("cybexjs");
const { Apis } = require("cybexjs-ws");
```

### 初始化
cybexjs需要使用cybexjs-ws库中的Apis工具类进行与Cybex节点的通讯，并进行Login操作：
	
	...
      let instanceRes = await Apis.instance("ws://127.0.0.1:8090", true).init_promise;	
初次使用Apis.instance()方法并传入所需连接的节点地址，cybexjs将会尝试链接节点并进行访问各类型API所需的准备工作。需要直接进行节点的访问查询时，再次调用Apis.instance()获取一个全局实例，使用该实例的方法db\_api()/history\_api()/network\_api()/network\_api()获得访问不同类型api的途径，并添加参数进行查询或广播，如：
	
	...
	let globalDynamicObject = 
		await this.Apis.instance()
      		.db_api()
      		.exec("get_dynamic_global_properties", []);
    ...

大多数情况下，对于链上数据的获取可以同过cybexjs库中封装好的方法进行。在使用之前，需进行ChainStore的初始化工作：

	...
		ChainStore.init().then(() => {
        	ChainStore.subscribe(updateState);
   		});
				
		let dynamicGlobal = null;
		function updateState(object) {
		    dynamicGlobal = ChainStore.getObject("2.1.0");
		    console.log("ChainStore object update\n", dynamicGlobal ? dynamicGlobal.toJS() : dynamicGlobal);
		}
	...
初始化过程中，会自动调用`set_subscribe_callback`方法订阅链上notice通知，并通过`subscribe`方法传入的更新回调同步链上状态的更新。
### 查询接口
cybexjs库中的 **ChainStore** 类提供了若干用以获取常用数据的辅助方法，可直接按需加以调用。并提供了工具函数 **FetchChain** 用来执行更加一般的数据获取。其类型签名如下：

	function FetchChain(methodName: string, objectIds: string[], timeout?: number, subMap?: {[x: string]: any;}): Promise<any>

方法参数：

| 参数 | 类型 | 说明 |
| :---: | :---: | --- |
| **methodName** | string | 用以传入希望调用的接口的方法名 |
| **objectIds** | string[] | 希望获取的Cybex数据标识，通常是某一记录的id。但对于用户或资产这类语义话数据，也可能是用户名或资产全称。|
| **timeout** | number(可选) | 希望的超时时间。可选参数，默认为1900毫秒 |
| **subMap** | Object(可选) | 用以管理查询更新订阅的对象，默认为空对象 |

**methodName** 支持的部分方法名

| 接口方法名 | 接口参数 |
| --- | --- |
| getObject | Cybex object ID |
| getAsset | ID or symbol |
| getAccountRefsOfKey | key |
| getAccountRefsOfAccount | account ID |
| getBalanceObjects | address |
| getAccount | account ID |
更多接口可查看ChainStore实现。

例子：
	
	let name = "harley";
	FetchChain(
		"getAccount", 
		name, 
		undefined, 
		{ [name]: true }
	).then(([harley]) => {
      console.log(harley);
    });


### 管理密钥
cybexjs库提供了有关公私钥及签名管理的操作。通过**PrivateKey**/**PublicKey**/**Signature**等工具类实现。并提供了**Login**类来简化一般的私钥管理签名操作。

Login类使用如下格式生成私钥种子

	keySeed = accountName + role + password

通过`generateKeys(account, password, [roles])`方法将生成对应不同roles的私钥。在需要使用时，需要提供私钥，并调用`checkKeys(account, password, auths)`方法验证其有效性，一旦验证成功，即可使用`signTransaction(tr)`方法对Transaction进行签名。

更加一般的方法私钥管理和签名方法，可以使用**Transaction**与**Privatekey**配合实现。

### 实现交易
* 关于广播并执行一个交易，大致的步骤是 **构造交易体 - 向交易体中添加操作 - 添加签名 - 广播交易**，其中需要手动进行的主要是**构造和添加交易中的操作**，其他主要可以由**TransacitonBuilder**类协助执行。
* Cybex中的所有标准数据结构都有唯一ID进行标识。CybexID采用三段式的形式标记（如x.x.xxxx的形式）。	
	* 其中第一段为数据大类，目前Cybex中有0/1/2三类ID：
		* **0** 目前仅用来表示撮合成交
		* **1** 表示链上协议中定义的数据结构，用来进行交易和操作的验证，钱包与数据库都需遵循该结构；
		* **2** 表示系统当前运行中所采用的动态数据，不需要在客户端和节点之间进行通讯，仅存在于链上，用于执行业务逻辑。如某一资产现有的资金池状况/智能资产的抵押状况/当前系统的区块数据等。
	* ID第二段表示具体的数据类型，第三段表示在该类型中的序号。
	* 常用的ID类型可以查看 [http://docs.bitshares.org/development/blockchain/objects.html#list-of-commonly-used-objects](http://docs.bitshares.org/development/blockchain/objects.html#list-of-commonly-used-objects) 或查阅代码获得。

* 可以添加的操作列表，以及操作结构的数据说明可以在 [https://github.com/CybexDex/cybexjs/blob/master/serializer/src/operations.js](https://github.com/CybexDex/cybexjs/blob/master/serializer/src/operations.js) 和 [https://github.com/CybexDex/cybexjs/blob/master/serializer/src/types.js](https://github.com/CybexDex/cybexjs/blob/master/serializer/src/types.js) 查询。

例子：

#### 注册用户
注册用户是一个典型的需要广播来修改链上信息的交易，用以创建链上新的用户。其他需要广播的交易步骤也与此类似。
	
        let tr = new TransactionBuilder(); // 构造一个交易体，TransactionBuilder可从cybexjs库中获得。
        tr.add_type_operation("account_create", { // 向交易中添加所需广播的操作，操作名称为 account_create.
          fee: { 
			  amount: 0,
            asset_id: "1.3.0"
          }, // 该笔交易的手续费字段。
          registrar: chain_registrar.get("id"), // 注册人ID
          referrer: chain_referrer.get("id"), // 引荐人ID
          referrer_percent: referrer_percent, // 引荐人返利额度
          name: new_account_name, // 用户名
          owner: { // 用户的Owner权限设置
            weight_threshold: 1, // Owner权限的域限
            account_auths: [], // 占有权限的用户列表
            key_auths: [[owner_pubkey, 1]], // 占有权限的公钥列表
            address_auths: [] // 占有权限的地址列表
          },
          active: { // 活跃权限配置
            weight_threshold: 1,
            account_auths: [],
            key_auths: [[active_pubkey, 1]],
            address_auths: []
          },
          options: { //其他配置
            memo_key: active_pubkey, // Memo公钥，其他人向该用户发送Memo时，将使用该公钥进行加密
            voting_account: "1.2.5", // 默认投票代理
            num_witness: 0, // 初始投票的证人数量
            num_committee: 0, // 初始投票的委员会数量
            votes: [] //初始投票的ID集合
          }
        });
        tr.add_signer(privKey); // 向交易添加签名，传入私钥
        await tr.broadcast(); // 广播交易，异步操作

字段说明：

* 本接口数据结构可查询 [https://github.com/NebulaCybexDEX/cybex-core/blob/master/libraries/chain/include/graphene/chain/protocol/account.hpp](https://github.com/NebulaCybexDEX/cybex-core/blob/master/libraries/chain/include/graphene/chain/protocol/account.hpp) 获得基本说明。
* **fee** 所有需要广播的交易都需要缴纳手续费，也都需要该字段。消耗的手续费会部分燃烧，燃烧的手续费进入系统预算池。 
	* `asset_id` 用来指定用来缴纳手续费的资产，默认是1.3.0，即核心资产(CYB)。
	* `amount`用来填写缴纳手续费数量。在添加operation时，可以先将amount设为0，然后通过调用*database_api*中的*get\_required_fees*接口获取该交易所需的最低手续费。一旦手续费不足，交易广播会失败。

	**注意**：
		
	* 手续费可以填写等于或高于最低手续费的任意值，多出的手续费会被系统销毁。
	* 链上所有费用的计数使用整数，即*amount*形式，其价值*value*/*price*遵循`value = amount / 10^precision`的计算，*precision*为资产的精度。

* **registrar/referrer** 注册人和引荐人ID，注册人用来缴纳此次注册所需的手续费，引荐人用来参与此用户未来所有操作时缴纳的手续费分红。
* **referrer_percent** 被注册用户的每笔手续费，除系统收取并燃烧外，应该由注册人和推荐人作为收益获取。该字段则用来规定收益在注册人与引荐人之间的分成比例，即多少百分比的收益分给引荐人，其他则分给注册人。
* **name** 被注册用户用户名。Cybex中用户名分为基本用户名和高级用户名，高级用户名手续费较高。
* **active/owner** 用户的活跃/账户权限配置。
	* 对于Cybex上的每一项交易，都需要有一个执行人，交易验签时，需要确认该交易中所包含的签名的阈值总和，达到了执行人权限阈限，交易才可执行。
	* active/owner即是两种不同的权限，其中acitve用来执行日常的交易签名，owner备用，用来调整账户权限本身。
	* 以active权限为例，每个权限可以由三种持有形式，分别是账户形式-`account_auths`字段，公钥形式-`key_auths`字段，地址形式-`address_auths`字段。字段值的类型为Vector\<account/key/address, 阈值>，`weight_threshold`字段为执行操作的有效阈限。执行操作时，会验证每一个签名对应的持有者阈值的加和是否满足阈限。
	* 默认新注册情况下，应该如上例一样，使用由seed生成的公钥作为持有者，生效阈限为1，该公钥签名阈值为1。即，当该用户作为发起者发起交易时，需要一个该publickey对应的签名即可生效。publicKey可以由cybexjs库的PrivateKey生成，具体方式可以参考CybexDaemon类。
* **options** 该字段为账户选项，具体如下
	* `memo_key`: 若某账户B向该用户A转账时，如果需要发送附言，则B先去链上查找用户A的本字段，与发送者的私钥共同对信息进行AES加密。当A收到后，利用`memo_key`对应的私钥可以解密信息。
	* `voting_account`: 该用户的投票代理人。1.2.5为默认系统代理，即用户独立投票。
	* `num_witness/num_committee`: 初始建立时投票的见证人/委员会数量。
	* `votes`: 初始建立时的投票对象