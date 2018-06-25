import types from "./types";
import SerializerImpl from "./serializer";

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
} = types;

// For module.exports
const Serializer = (operation_name, serilization_types_object) =>
  new SerializerImpl(operation_name, serilization_types_object);

export const fund_query = new Serializer("fund_query", {
  accountName: string,
  asset: string,
  size: uint32,
  offset: uint32,
  expiration: time_point_sec
});
