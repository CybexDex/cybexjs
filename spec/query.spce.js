const {
  PrivateKey,
  Operations,
  Signature,
  TransactionBuilder
} = require("./../umd");

const privKeyWif = "5K8DGK453m3uf9RqoBFAroXAJ4xakDb9iNxpmJj5bmNcXuK3dEJ";

const tb = new TransactionBuilder();

const op = Operations.fund_query.fromObject({
  accountName: "create-test16",
  asset: "TEST.ETH",
  fundType: "WITHDRAW",
  offset: 0,
  size: 10,
  expiration: Math.ceil(Date.now() / 1000) + 30
});

let privKey = PrivateKey.fromWif(privKeyWif);
let pubKey = privKey.toPublicKey();
let buffer = Operations.fund_query.toBuffer(op);
let res = Signature.signBuffer(buffer, privKey).toBuffer();

console.log("After Sign: ");
console.log(res);
console.log("Verify: ");
console.log(Signature.fromBuffer(res).verifyBuffer(buffer, pubKey));
