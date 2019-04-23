"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assert = _interopRequireDefault(require("assert"));

var _cybexjsWs = require("cybexjs-ws");

var _hash2 = require("./hash");

var _bs = require("bs58");

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Addresses are shortened non-reversable hashes of a public key.  The full PublicKey is preferred.
    @deprecated
*/
class Address {
  constructor(addy) {
    this.addy = addy;
  }

  static fromBuffer(buffer) {
    var _hash = (0, _hash2.sha512)(buffer);

    var addy = (0, _hash2.ripemd160)(_hash);
    return new Address(addy);
  }

  static fromString(string, address_prefix = _cybexjsWs.ChainConfig.address_prefix) {
    var prefix = string.slice(0, address_prefix.length);

    _assert.default.equal(address_prefix, prefix, `Expecting key to begin with ${address_prefix}, instead got ${prefix}`);

    var addy = string.slice(address_prefix.length);
    addy = new Buffer((0, _bs.decode)(addy), 'binary');
    var checksum = addy.slice(-4);
    addy = addy.slice(0, -4);
    var new_checksum = (0, _hash2.ripemd160)(addy);
    new_checksum = new_checksum.slice(0, 4);
    var isEqual = (0, _deepEqual.default)(checksum, new_checksum); //, 'Invalid checksum'

    if (!isEqual) {
      throw new Error("Checksum did not match");
    }

    return new Address(addy);
  }

  /** @return Address - Compressed PTS format (by default) */
  static fromPublic(public_key, compressed = true, version = 56) {
    var sha2 = (0, _hash2.sha256)(public_key.toBuffer(compressed));
    var rep = (0, _hash2.ripemd160)(sha2);
    var versionBuffer = new Buffer(1);
    versionBuffer.writeUInt8(0xFF & version, 0);
    var addr = Buffer.concat([versionBuffer, rep]);
    var check = (0, _hash2.sha256)(addr);
    check = (0, _hash2.sha256)(check);
    var buffer = Buffer.concat([addr, check.slice(0, 4)]);
    return new Address((0, _hash2.ripemd160)(buffer));
  }

  toBuffer() {
    return this.addy;
  }

  toString(address_prefix = _cybexjsWs.ChainConfig.address_prefix) {
    var checksum = (0, _hash2.ripemd160)(this.addy);
    var addy = Buffer.concat([this.addy, checksum.slice(0, 4)]);
    return address_prefix + (0, _bs.encode)(addy);
  }

}

var _default = Address;
exports.default = _default;
module.exports = exports.default;