"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Serializer", {
  enumerable: true,
  get: function () {
    return _serializer.default;
  }
});
Object.defineProperty(exports, "fp", {
  enumerable: true,
  get: function () {
    return _FastParser.default;
  }
});
Object.defineProperty(exports, "types", {
  enumerable: true,
  get: function () {
    return _types.default;
  }
});
Object.defineProperty(exports, "template", {
  enumerable: true,
  get: function () {
    return _template.default;
  }
});
Object.defineProperty(exports, "SerializerValidation", {
  enumerable: true,
  get: function () {
    return _SerializerValidation.default;
  }
});
exports.ops = void 0;

var _serializer = _interopRequireDefault(require("./src/serializer"));

var _FastParser = _interopRequireDefault(require("./src/FastParser"));

var _types = _interopRequireDefault(require("./src/types"));

var ops = _interopRequireWildcard(require("./src/operations"));

exports.ops = ops;

var _template = _interopRequireDefault(require("./src/template"));

var _SerializerValidation = _interopRequireDefault(require("./src/SerializerValidation"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }