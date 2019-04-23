"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ecdsa = require("./ecdsa");

var _hash2 = require("./hash");

var _ecurve = require("ecurve");

var _assert = _interopRequireDefault(require("assert"));

var _bigi = _interopRequireDefault(require("bigi"));

var _PublicKey = _interopRequireDefault(require("./PublicKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secp256k1 = (0, _ecurve.getCurveByName)('secp256k1');

class Signature {
  constructor(r1, s1, i1) {
    this.r = r1;
    this.s = s1;
    this.i = i1;

    _assert.default.equal(this.r != null, true, 'Missing parameter');

    _assert.default.equal(this.s != null, true, 'Missing parameter');

    _assert.default.equal(this.i != null, true, 'Missing parameter');
  }

  static fromBuffer(buf) {
    var i, r, s;

    _assert.default.equal(buf.length, 65, 'Invalid signature length');

    i = buf.readUInt8(0);

    _assert.default.equal(i - 27, i - 27 & 7, 'Invalid signature parameter');

    r = _bigi.default.fromBuffer(buf.slice(1, 33));
    s = _bigi.default.fromBuffer(buf.slice(33));
    return new Signature(r, s, i);
  }

  toBuffer() {
    var buf;
    buf = new Buffer(65);
    buf.writeUInt8(this.i, 0);
    this.r.toBuffer(32).copy(buf, 1);
    this.s.toBuffer(32).copy(buf, 33);
    return buf;
  }

  recoverPublicKeyFromBuffer(buffer) {
    return this.recoverPublicKey((0, _hash2.sha256)(buffer));
  }

  /**
      @return {PublicKey}
  */
  recoverPublicKey(sha256_buffer) {
    let Q, e, i;
    e = _bigi.default.fromBuffer(sha256_buffer);
    i = this.i;
    i -= 27;
    i = i & 3;
    Q = (0, _ecdsa.recoverPubKey)(secp256k1, e, this, i);
    return _PublicKey.default.fromPoint(Q);
  }

  /**
      @param {Buffer} buf
      @param {PrivateKey} private_key
      @return {Signature}
  */
  static signBuffer(buf, private_key) {
    var _hash = (0, _hash2.sha256)(buf);

    return Signature.signBufferSha256(_hash, private_key);
  }
  /** Sign a buffer of exactally 32 bytes in size (sha256(text))
      @param {Buffer} buf - 32 bytes binary
      @param {PrivateKey} private_key
      @return {Signature}
  */


  static signBufferSha256(buf_sha256, private_key) {
    if (buf_sha256.length !== 32 || !Buffer.isBuffer(buf_sha256)) throw new Error("buf_sha256: 32 byte buffer requred");
    var der, e, ecsignature, i, lenR, lenS, nonce;
    i = null;
    nonce = 0;
    e = _bigi.default.fromBuffer(buf_sha256);

    while (true) {
      ecsignature = (0, _ecdsa.sign)(secp256k1, buf_sha256, private_key.d, nonce++);
      der = ecsignature.toDER();
      lenR = der[3];
      lenS = der[5 + lenR];

      if (lenR === 32 && lenS === 32) {
        i = (0, _ecdsa.calcPubKeyRecoveryParam)(secp256k1, e, ecsignature, private_key.toPublicKey().Q);
        i += 4; // compressed

        i += 27; // compact  //  24 or 27 :( forcing odd-y 2nd key candidate)

        break;
      }

      if (nonce % 10 === 0) {
        console.log("WARN: " + nonce + " attempts to find canonical signature");
      }
    }

    return new Signature(ecsignature.r, ecsignature.s, i);
  }

  static sign(string, private_key) {
    return Signature.signBuffer(new Buffer(string), private_key);
  }

  /**
      @param {Buffer} un-hashed
      @param {./PublicKey}
      @return {boolean}
  */
  verifyBuffer(buf, public_key) {
    var _hash = (0, _hash2.sha256)(buf);

    return this.verifyHash(_hash, public_key);
  }

  verifyHash(hash, public_key) {
    _assert.default.equal(hash.length, 32, "A SHA 256 should be 32 bytes long, instead got " + hash.length);

    return (0, _ecdsa.verify)(secp256k1, hash, {
      r: this.r,
      s: this.s
    }, public_key.Q);
  }

  /* <HEX> */
  toByteBuffer() {
    var b;
    b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
    this.appendByteBuffer(b);
    return b.copy(0, b.offset);
  }

  static fromHex(hex) {
    return Signature.fromBuffer(new Buffer(hex, "hex"));
  }

  toHex() {
    return this.toBuffer().toString("hex");
  }

  static signHex(hex, private_key) {
    var buf;
    buf = new Buffer(hex, 'hex');
    return Signature.signBuffer(buf, private_key);
  }

  verifyHex(hex, public_key) {
    var buf;
    buf = new Buffer(hex, 'hex');
    return this.verifyBuffer(buf, public_key);
  }

}

var _default = Signature;
exports.default = _default;
module.exports = exports.default;