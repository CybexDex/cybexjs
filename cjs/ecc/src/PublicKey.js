"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bigi = _interopRequireDefault(require("bigi"));

var _ecurve = require("ecurve");

var _bs = require("bs58");

var _hash = require("./hash");

var _cybexjsWs = require("cybexjs-ws");

var _assert = _interopRequireDefault(require("assert"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const secp256k1 = (0, _ecurve.getCurveByName)('secp256k1');
const {
  G,
  n
} = secp256k1;

class PublicKey {
  /** @param {Point} public key */
  constructor(Q) {
    this.Q = Q;
  }

  static fromBinary(bin) {
    return PublicKey.fromBuffer(new Buffer(bin, 'binary'));
  }

  static fromBuffer(buffer) {
    if (buffer.toString('hex') === '000000000000000000000000000000000000000000000000000000000000000000') return new PublicKey(null);
    return new PublicKey(_ecurve.Point.decodeFrom(secp256k1, buffer));
  }

  toBuffer(compressed = this.Q ? this.Q.compressed : null) {
    if (this.Q === null) return new Buffer('000000000000000000000000000000000000000000000000000000000000000000', 'hex');
    return this.Q.getEncoded(compressed);
  }

  static fromPoint(point) {
    return new PublicKey(point);
  }

  toUncompressed() {
    var buf = this.Q.getEncoded(false);

    var point = _ecurve.Point.decodeFrom(secp256k1, buf);

    return PublicKey.fromPoint(point);
  }
  /** cyb::blockchain::address (unique but not a full public key) */


  toBlockchainAddress() {
    var pub_buf = this.toBuffer();
    var pub_sha = (0, _hash.sha512)(pub_buf);
    return (0, _hash.ripemd160)(pub_sha);
  }
  /** Alias for {@link toPublicKeyString} */


  toString(address_prefix = _cybexjsWs.ChainConfig.address_prefix) {
    return this.toPublicKeyString(address_prefix);
  }
  /**
      Full public key
      {return} string
  */


  toPublicKeyString(address_prefix = _cybexjsWs.ChainConfig.address_prefix) {
    var pub_buf = this.toBuffer();
    var checksum = (0, _hash.ripemd160)(pub_buf);
    var addy = Buffer.concat([pub_buf, checksum.slice(0, 4)]);
    return address_prefix + (0, _bs.encode)(addy);
  }
  /**
      @arg {string} public_key - like GPHXyz...
      @arg {string} address_prefix - like GPH
      @return PublicKey or `null` (if the public_key string is invalid)
  */


  static fromPublicKeyString(public_key, address_prefix = _cybexjsWs.ChainConfig.address_prefix) {
    try {
      return PublicKey.fromStringOrThrow(public_key, address_prefix);
    } catch (e) {
      return null;
    }
  }
  /**
      @arg {string} public_key - like GPHXyz...
      @arg {string} address_prefix - like GPH
      @throws {Error} if public key is invalid
      @return PublicKey
  */


  static fromStringOrThrow(public_key, address_prefix = _cybexjsWs.ChainConfig.address_prefix) {
    var prefix = public_key.slice(0, address_prefix.length);

    _assert.default.equal(address_prefix, prefix, `Expecting key to begin with ${address_prefix}, instead got ${prefix}`);

    public_key = public_key.slice(address_prefix.length);
    public_key = new Buffer((0, _bs.decode)(public_key), 'binary');
    var checksum = public_key.slice(-4);
    public_key = public_key.slice(0, -4);
    var new_checksum = (0, _hash.ripemd160)(public_key);
    new_checksum = new_checksum.slice(0, 4);
    var isEqual = (0, _deepEqual.default)(checksum, new_checksum); //, 'Invalid checksum'

    if (!isEqual) {
      throw new Error("Checksum did not match");
    }

    return PublicKey.fromBuffer(public_key);
  }

  toAddressString(address_prefix = _cybexjsWs.ChainConfig.address_prefix) {
    var pub_buf = this.toBuffer();
    var pub_sha = (0, _hash.sha512)(pub_buf);
    var addy = (0, _hash.ripemd160)(pub_sha);
    var checksum = (0, _hash.ripemd160)(addy);
    addy = Buffer.concat([addy, checksum.slice(0, 4)]);
    return address_prefix + (0, _bs.encode)(addy);
  }

  toPtsAddy() {
    var pub_buf = this.toBuffer();
    var pub_sha = (0, _hash.sha256)(pub_buf);
    var addy = (0, _hash.ripemd160)(pub_sha);
    addy = Buffer.concat([new Buffer([0x38]), addy]); //version 56(decimal)

    var checksum = (0, _hash.sha256)(addy);
    checksum = (0, _hash.sha256)(checksum);
    addy = Buffer.concat([addy, checksum.slice(0, 4)]);
    return (0, _bs.encode)(addy);
  }

  child(offset) {
    (0, _assert.default)(Buffer.isBuffer(offset), "Buffer required: offset");

    _assert.default.equal(offset.length, 32, "offset length");

    offset = Buffer.concat([this.toBuffer(), offset]);
    offset = (0, _hash.sha256)(offset);

    let c = _bigi.default.fromBuffer(offset);

    if (c.compareTo(n) >= 0) throw new Error("Child offset went out of bounds, try again");
    let cG = G.multiply(c);
    let Qprime = this.Q.add(cG);
    if (secp256k1.isInfinity(Qprime)) throw new Error("Child offset derived to an invalid key, try again");
    return PublicKey.fromPoint(Qprime);
  }
  /* <HEX> */


  toByteBuffer() {
    var b = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
    this.appendByteBuffer(b);
    return b.copy(0, b.offset);
  }

  static fromHex(hex) {
    return PublicKey.fromBuffer(new Buffer(hex, 'hex'));
  }

  toHex() {
    return this.toBuffer().toString('hex');
  }

  static fromPublicKeyStringHex(hex) {
    return PublicKey.fromPublicKeyString(new Buffer(hex, 'hex'));
  }
  /* </HEX> */


}

var _default = PublicKey;
exports.default = _default;
module.exports = exports.default;