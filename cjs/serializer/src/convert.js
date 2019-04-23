"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _bytebuffer = _interopRequireDefault(require("bytebuffer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(type) {
  return {
    fromHex(hex) {
      var b = _bytebuffer.default.fromHex(hex, _bytebuffer.default.LITTLE_ENDIAN);

      return type.fromByteBuffer(b);
    },

    toHex(object) {
      var b = toByteBuffer(type, object);
      return b.toHex();
    },

    fromBuffer(buffer) {
      var b = _bytebuffer.default.fromBinary(buffer.toString(), _bytebuffer.default.LITTLE_ENDIAN);

      return type.fromByteBuffer(b);
    },

    toBuffer(object) {
      return new Buffer(toByteBuffer(type, object).toBinary(), 'binary');
    },

    fromBinary(string) {
      var b = _bytebuffer.default.fromBinary(string, _bytebuffer.default.LITTLE_ENDIAN);

      return type.fromByteBuffer(b);
    },

    toBinary(object) {
      return toByteBuffer(type, object).toBinary();
    }

  };
}

;

var toByteBuffer = function (type, object) {
  var b = new _bytebuffer.default(_bytebuffer.default.DEFAULT_CAPACITY, _bytebuffer.default.LITTLE_ENDIAN);
  type.appendByteBuffer(b, object);
  return b.copy(0, b.offset);
};

module.exports = exports.default;