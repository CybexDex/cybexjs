"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fund_query = void 0;

var _types = _interopRequireDefault(require("./types"));

var _serializer = _interopRequireDefault(require("./serializer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var {
  //id_type,
  //varint32,
  uint8,
  uint16,
  uint32,
  int64,
  uint64,
  string,
  bytes,
  bool,
  array,
  fixed_array,
  protocol_id_type,
  object_id_type,
  vote_id,
  future_extensions,
  static_variant,
  map,
  set,
  public_key,
  address,
  time_point_sec,
  optional
} = _types.default; // For module.exports

const Serializer = (operation_name, serilization_types_object) => new _serializer.default(operation_name, serilization_types_object);

const fund_query = new Serializer("fund_query", {
  accountName: string,
  asset: string,
  size: uint32,
  offset: uint32,
  expiration: time_point_sec
});
exports.fund_query = fund_query;