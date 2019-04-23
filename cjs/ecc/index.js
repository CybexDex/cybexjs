"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Address", {
  enumerable: true,
  get: function () {
    return _address.default;
  }
});
Object.defineProperty(exports, "Aes", {
  enumerable: true,
  get: function () {
    return _aes.default;
  }
});
Object.defineProperty(exports, "PrivateKey", {
  enumerable: true,
  get: function () {
    return _PrivateKey.default;
  }
});
Object.defineProperty(exports, "PublicKey", {
  enumerable: true,
  get: function () {
    return _PublicKey.default;
  }
});
Object.defineProperty(exports, "Signature", {
  enumerable: true,
  get: function () {
    return _signature.default;
  }
});
Object.defineProperty(exports, "brainKey", {
  enumerable: true,
  get: function () {
    return _BrainKey.default;
  }
});
Object.defineProperty(exports, "key", {
  enumerable: true,
  get: function () {
    return _KeyUtils.default;
  }
});
exports.hash = void 0;

var _address = _interopRequireDefault(require("./src/address"));

var _aes = _interopRequireDefault(require("./src/aes"));

var _PrivateKey = _interopRequireDefault(require("./src/PrivateKey"));

var _PublicKey = _interopRequireDefault(require("./src/PublicKey"));

var _signature = _interopRequireDefault(require("./src/signature"));

var _BrainKey = _interopRequireDefault(require("./src/BrainKey"));

var hash = _interopRequireWildcard(require("./src/hash"));

exports.hash = hash;

var _KeyUtils = _interopRequireDefault(require("./src/KeyUtils"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }