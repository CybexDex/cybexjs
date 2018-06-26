import { Point, getCurveByName } from "ecurve";
import BigInteger from 'bigi';


declare module "cybexjs" {
  class Serializer {
    constructor(operation_name: string, types: { [p: string]: any });
    fromByteBuffer(b);
    appendByteBuffer(b, object);
    fromObject(serialized_object);
    toObject(
      serialized_object,
      debug: { use_default?: boolean; annotate?: boolean }
    );
    compare(a, b);
    fromHex(hex);
    fromBuffer(buffer);
    toHex(object);
    toByteBuffer(objectt);
    toBuffer(object);
  }
  const ops: { [op: string]: Serializer };

  class Signature {
    constructor(r1, s1, i1);
    static fromBuffer(buf): Signature;
    toBuffer(): Buffer;
    recoverPublicKeyFromBuffer(buffer);
    static signBuffer(buf, private_key): Signature;
    static signBufferSha256(buf_sha256, private_key): Signature;
    static sign(string, private_key): Signature;
    verifyBuffer(buf, public_key): boolean;
    verifyHash(hash, public_key): boolean;
    toByteBuffer(): Buffer;
    static fromHex(hex): Signature;
    toHex(): string;
    static signHex(hex, private_key): Signature;
    verifyHex(hex, public_key): boolean;
  }
  type ParamsOfCheck = {
    accountName: string;
    password: string;
    auths: { [x: string]: [string, number][] };
  };
  class AccountLogin {
    checkKeys: (paramsToCheck: ParamsOfCheck) => boolean;
    generateKeys(
      accountName: string,
      password: string,
      roles?: string[],
      prefix?: string
    ): any;
    signTransaction(tr: any): void;
  }
  const Login: AccountLogin;
  class ChainStoreClass {
    resetCache(): void;
    init: () => Promise<any>;
    subscribe(handler: (obj: object) => any): void;
    unsubscribe(handler: (obj: object) => any): void;
    fetchFullAccount: any;
    getEstimatedChainTimeOffset: any;
    subError: any;
    subscribed: any;
    getObject(id: string): any;
    getAsset(symbolOrId: string): any;
    getBalanceObjects(id: string | string[]): any;
    getAccount(name_or_id: string, autosubscribe?: boolean): any;
  }
  const ChainStore: ChainStoreClass;
  const TransactionBuilder: any;
  const FetchChain: (apiMethod: string, ...args: any[]) => Promise<any>;
  const TransactionHelper: any;
  const Aes: any;
  class PublicKey {
    /** @param {Point} public key */
    constructor(Q);
    static fromBinary(bin): PublicKey;
    static fromBuffer(buffer): PublicKey;
    /**
        @arg {string} public_key - like GPHXyz...
        @arg {string} address_prefix - like GPH
        @return PublicKey or `null` (if the public_key string is invalid)
    */
    static fromPublicKeyString(public_key, address_prefix?): PublicKey | null;
    static fromStringOrThrow(public_key, address_prefix?): PublicKey | null;
    toBuffer(compressed?): Buffer;
    static fromPoint(point): PublicKey;
    toUncompressed(): PublicKey;
    /** cyb::blockchain::address (unique but not a full public key) */
    toBlockchainAddress(): string;
    /** Alias for {@link toPublicKeyString} */
    toString(address_prefix?: string): string;
    /**
        Full public key
        {return} string
    */
    toPublicKeyString(address_prefix?: string): string;
    toAddressString(address_prefix?: string): string;
    toPtsAddy(): string;
    child(offset): PublicKey;
    toByteBuffer(): Buffer;
    static fromHex(hex): PublicKey;
    toHex(): string;
    static fromPublicKeyStringHex(hex: string): PublicKey;
  }
  class PrivateKey {
    /**
        @private see static functions
        @param {BigInteger}
    */
    constructor(d);
    static fromBuffer(buf: Buffer): PrivateKey;

    /** @arg {string} seed - any length string.  This is private, the same seed produces the same private key every time.  */
    static fromSeed(seed: string): PrivateKey;

    /** @return {string} Wallet Import Format (still a secret, Not encrypted) */
    static fromWif(_private_wif: string): PrivateKey;
    toWif(): string;
    toPublicKeyPoint();
    toPublicKey(): PublicKey;
    toBuffer(): Buffer;
    toByteBuffer(): Buffer;
    get_shared_secret(public_key, legacy?: boolean): string;
    static fromHex(hex: string): PrivateKey;
    child(offset): PrivateKey;
    toHex(): string;
  }
  const ChainTypes: any;
  const ChainValidation: {
    is_account_name: (value, allow_too_short?) => boolean;
    is_object_id: (id: string) => boolean;
    is_empty: (value, allow_too_short?) => boolean;
    is_account_name_error: (value, allow_too_short?) => boolean;
    is_cheap_name: (value, allow_too_short?) => boolean;
    is_empty_user_input: (value) => boolean;
    is_valid_symbol_error: (value, arg?) => boolean;
    required: (value, field_name?) => boolean;
  };
  const key: {
    addresses(pubkey: any): string[];
    get_random_key: any;
  };
  const EmitterInstance: any;
}
