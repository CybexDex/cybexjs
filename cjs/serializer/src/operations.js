"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.committee_member_update_global_parameters = exports.chain_parameters = exports.committee_member_update = exports.committee_member_create = exports.withdraw_permission_delete = exports.withdraw_permission_claim = exports.withdraw_permission_update = exports.withdraw_permission_create = exports.proposal_delete = exports.proposal_update = exports.proposal_create = exports.op_wrapper = exports.witness_update = exports.witness_create = exports.asset_publish_feed = exports.price_feed = exports.initiate_crowdfund = exports.withdraw_crowdfund = exports.participate_crowdfund = exports.asset_global_settle = exports.asset_settle = exports.asset_fund_fee_pool = exports.asset_reserve = exports.asset_issue = exports.asset_update_feed_producers = exports.asset_update_bitasset = exports.asset_update = exports.asset_create = exports.bitasset_options = exports.asset_options = exports.price = exports.account_transfer = exports.account_upgrade = exports.account_whitelist = exports.account_update = exports.account_create = exports.account_options = exports.authority = exports.fill_order = exports.call_order_update = exports.limit_order_cancel = exports.limit_order_create = exports.transfer = exports.memo_data = exports.signed_block_header = exports.block_header = exports.signed_block = exports.processed_transaction = exports.asset = exports.void_result = exports.fee_schedule = exports.asset_claim_fees_operation_fee_parameters = exports.asset_settle_cancel_operation_fee_parameters = exports.transfer_from_blind_operation_fee_parameters = exports.blind_transfer_operation_fee_parameters = exports.transfer_to_blind_operation_fee_parameters = exports.override_transfer_operation_fee_parameters = exports.balance_claim_operation_fee_parameters = exports.assert_operation_fee_parameters = exports.custom_operation_fee_parameters = exports.worker_create_operation_fee_parameters = exports.vesting_balance_withdraw_operation_fee_parameters = exports.vesting_balance_create_operation_fee_parameters = exports.committee_member_update_global_parameters_operation_fee_parameters = exports.committee_member_update_operation_fee_parameters = exports.committee_member_create_operation_fee_parameters = exports.withdraw_permission_delete_operation_fee_parameters = exports.withdraw_permission_claim_operation_fee_parameters = exports.withdraw_permission_update_operation_fee_parameters = exports.withdraw_permission_create_operation_fee_parameters = exports.proposal_delete_operation_fee_parameters = exports.proposal_update_operation_fee_parameters = exports.proposal_create_operation_fee_parameters = exports.witness_update_operation_fee_parameters = exports.witness_create_operation_fee_parameters = exports.asset_publish_feed_operation_fee_parameters = exports.asset_global_settle_operation_fee_parameters = exports.asset_settle_operation_fee_parameters = exports.asset_fund_fee_pool_operation_fee_parameters = exports.asset_reserve_operation_fee_parameters = exports.withdraw_crowdfund_operation_fee_parameters = exports.participate_crowdfund_operation_fee_parameters = exports.initiate_crowdfund_operation_fee_parameters = exports.asset_issue_operation_fee_parameters = exports.asset_update_feed_producers_operation_fee_parameters = exports.asset_update_bitasset_operation_fee_parameters = exports.asset_update_operation_fee_parameters = exports.asset_create_operation_fee_parameters = exports.account_transfer_operation_fee_parameters = exports.account_upgrade_operation_fee_parameters = exports.account_whitelist_operation_fee_parameters = exports.account_update_operation_fee_parameters = exports.account_create_operation_fee_parameters = exports.fill_order_operation_fee_parameters = exports.call_order_update_operation_fee_parameters = exports.limit_order_cancel_operation_fee_parameters = exports.limit_order_create_operation_fee_parameters = exports.transfer_operation_fee_parameters = exports.void_ext = exports.operation = void 0;
exports.fund_query = exports.stealth_memo_data = exports.signed_transaction = exports.transaction = exports.asset_claim_fees = exports.asset_settle_cancel = exports.transfer_from_blind = exports.blind_transfer = exports.blind_input = exports.transfer_to_blind = exports.blind_output = exports.stealth_confirmation = exports.override_transfer = exports.balance_claim = exports.assert = exports.block_id_predicate = exports.asset_symbol_eq_lit_predicate = exports.account_name_eq_lit_predicate = exports.custom = exports.worker_create = exports.burn_worker_initializer = exports.vesting_balance_worker_initializer = exports.refund_worker_initializer = exports.vesting_balance_withdraw = exports.vesting_balance_create = exports.cdd_vesting_policy_initializer = exports.linear_vesting_policy_initializer = void 0;

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
} = _types.default; // future_extensions = types.void;

/*
When updating generated code
Replace:  operation = static_variant [
with:     operation.st_operations = [

Delete:
public_key = new Serializer(
    "public_key"
    key_data: bytes 33
)

*/
// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...

var operation = static_variant(); // module.exports["operation"] = operation;

exports.operation = operation;

// For module.exports
var Serializer = function (operation_name, serilization_types_object) {
  return new _serializer.default(operation_name, serilization_types_object); // return module.exports[operation_name] = s;
};

var void_ext = new Serializer("void_ext");
exports.void_ext = void_ext;
var cybex_ext_vesting = new Serializer("cybex_ext_vesting", {
  vesting_period: uint64,
  public_key: public_key
});
var cybex_ext_transfer_vesting = new Serializer("cybex_ext_transfer_vesting", {
  vesting_cliff: uint64,
  vesting_duration: uint64
});
var cybex_ext_swap = new Serializer("cybex_ext_swap", {
  cybex_ext_swap: string
});
var cybex_ext_xfer_to_name = new Serializer("cybex_ext_xfer_to_name", {
  name: string,
  asset_sym: string,
  fee_asset_sym: string,
  hw_cookie1: uint8,
  hw_cookie2: uint8
});
var cybex_xfer_item = new Serializer("cybex_xfer_item", {
  name: string,
  amount: string
});
var cybex_ext_xfer_to_many = new Serializer("cybex_ext_xfer_to_many", {
  list: array(cybex_xfer_item)
});
var future_extensions = static_variant([void_ext, cybex_ext_vesting, cybex_ext_swap, cybex_ext_transfer_vesting, cybex_ext_xfer_to_name, cybex_ext_xfer_to_many]); // Custom-types follow Generated code:
// ##  Generated code follows
// # programs/js_operation_serializer > npm i -g decaffeinate
// ## -------------------------------

const transfer_operation_fee_parameters = new Serializer("transfer_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.transfer_operation_fee_parameters = transfer_operation_fee_parameters;
const limit_order_create_operation_fee_parameters = new Serializer("limit_order_create_operation_fee_parameters", {
  fee: uint64
});
exports.limit_order_create_operation_fee_parameters = limit_order_create_operation_fee_parameters;
const limit_order_cancel_operation_fee_parameters = new Serializer("limit_order_cancel_operation_fee_parameters", {
  fee: uint64
});
exports.limit_order_cancel_operation_fee_parameters = limit_order_cancel_operation_fee_parameters;
const call_order_update_operation_fee_parameters = new Serializer("call_order_update_operation_fee_parameters", {
  fee: uint64
});
exports.call_order_update_operation_fee_parameters = call_order_update_operation_fee_parameters;
const fill_order_operation_fee_parameters = new Serializer("fill_order_operation_fee_parameters");
exports.fill_order_operation_fee_parameters = fill_order_operation_fee_parameters;
const account_create_operation_fee_parameters = new Serializer("account_create_operation_fee_parameters", {
  basic_fee: uint64,
  premium_fee: uint64,
  price_per_kbyte: uint32
});
exports.account_create_operation_fee_parameters = account_create_operation_fee_parameters;
const account_update_operation_fee_parameters = new Serializer("account_update_operation_fee_parameters", {
  fee: int64,
  price_per_kbyte: uint32
});
exports.account_update_operation_fee_parameters = account_update_operation_fee_parameters;
const account_whitelist_operation_fee_parameters = new Serializer("account_whitelist_operation_fee_parameters", {
  fee: int64
});
exports.account_whitelist_operation_fee_parameters = account_whitelist_operation_fee_parameters;
const account_upgrade_operation_fee_parameters = new Serializer("account_upgrade_operation_fee_parameters", {
  membership_annual_fee: uint64,
  membership_lifetime_fee: uint64
});
exports.account_upgrade_operation_fee_parameters = account_upgrade_operation_fee_parameters;
const account_transfer_operation_fee_parameters = new Serializer("account_transfer_operation_fee_parameters", {
  fee: uint64
});
exports.account_transfer_operation_fee_parameters = account_transfer_operation_fee_parameters;
const asset_create_operation_fee_parameters = new Serializer("asset_create_operation_fee_parameters", {
  symbol3: uint64,
  symbol4: uint64,
  long_symbol: uint64,
  price_per_kbyte: uint32
});
exports.asset_create_operation_fee_parameters = asset_create_operation_fee_parameters;
const asset_update_operation_fee_parameters = new Serializer("asset_update_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.asset_update_operation_fee_parameters = asset_update_operation_fee_parameters;
const asset_update_bitasset_operation_fee_parameters = new Serializer("asset_update_bitasset_operation_fee_parameters", {
  fee: uint64
});
exports.asset_update_bitasset_operation_fee_parameters = asset_update_bitasset_operation_fee_parameters;
const asset_update_feed_producers_operation_fee_parameters = new Serializer("asset_update_feed_producers_operation_fee_parameters", {
  fee: uint64
});
exports.asset_update_feed_producers_operation_fee_parameters = asset_update_feed_producers_operation_fee_parameters;
const asset_issue_operation_fee_parameters = new Serializer("asset_issue_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.asset_issue_operation_fee_parameters = asset_issue_operation_fee_parameters;
const initiate_crowdfund_operation_fee_parameters = new Serializer("initiate_crowdfund_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.initiate_crowdfund_operation_fee_parameters = initiate_crowdfund_operation_fee_parameters;
const participate_crowdfund_operation_fee_parameters = new Serializer("participate_crowdfund_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.participate_crowdfund_operation_fee_parameters = participate_crowdfund_operation_fee_parameters;
const withdraw_crowdfund_operation_fee_parameters = new Serializer("withdraw_crowdfund_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.withdraw_crowdfund_operation_fee_parameters = withdraw_crowdfund_operation_fee_parameters;
const asset_reserve_operation_fee_parameters = new Serializer("asset_reserve_operation_fee_parameters", {
  fee: uint64
});
exports.asset_reserve_operation_fee_parameters = asset_reserve_operation_fee_parameters;
const asset_fund_fee_pool_operation_fee_parameters = new Serializer("asset_fund_fee_pool_operation_fee_parameters", {
  fee: uint64
});
exports.asset_fund_fee_pool_operation_fee_parameters = asset_fund_fee_pool_operation_fee_parameters;
const asset_settle_operation_fee_parameters = new Serializer("asset_settle_operation_fee_parameters", {
  fee: uint64
});
exports.asset_settle_operation_fee_parameters = asset_settle_operation_fee_parameters;
const asset_global_settle_operation_fee_parameters = new Serializer("asset_global_settle_operation_fee_parameters", {
  fee: uint64
});
exports.asset_global_settle_operation_fee_parameters = asset_global_settle_operation_fee_parameters;
const asset_publish_feed_operation_fee_parameters = new Serializer("asset_publish_feed_operation_fee_parameters", {
  fee: uint64
});
exports.asset_publish_feed_operation_fee_parameters = asset_publish_feed_operation_fee_parameters;
const witness_create_operation_fee_parameters = new Serializer("witness_create_operation_fee_parameters", {
  fee: uint64
});
exports.witness_create_operation_fee_parameters = witness_create_operation_fee_parameters;
const witness_update_operation_fee_parameters = new Serializer("witness_update_operation_fee_parameters", {
  fee: int64
});
exports.witness_update_operation_fee_parameters = witness_update_operation_fee_parameters;
const proposal_create_operation_fee_parameters = new Serializer("proposal_create_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.proposal_create_operation_fee_parameters = proposal_create_operation_fee_parameters;
const proposal_update_operation_fee_parameters = new Serializer("proposal_update_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.proposal_update_operation_fee_parameters = proposal_update_operation_fee_parameters;
const proposal_delete_operation_fee_parameters = new Serializer("proposal_delete_operation_fee_parameters", {
  fee: uint64
});
exports.proposal_delete_operation_fee_parameters = proposal_delete_operation_fee_parameters;
const withdraw_permission_create_operation_fee_parameters = new Serializer("withdraw_permission_create_operation_fee_parameters", {
  fee: uint64
});
exports.withdraw_permission_create_operation_fee_parameters = withdraw_permission_create_operation_fee_parameters;
const withdraw_permission_update_operation_fee_parameters = new Serializer("withdraw_permission_update_operation_fee_parameters", {
  fee: uint64
});
exports.withdraw_permission_update_operation_fee_parameters = withdraw_permission_update_operation_fee_parameters;
const withdraw_permission_claim_operation_fee_parameters = new Serializer("withdraw_permission_claim_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.withdraw_permission_claim_operation_fee_parameters = withdraw_permission_claim_operation_fee_parameters;
const withdraw_permission_delete_operation_fee_parameters = new Serializer("withdraw_permission_delete_operation_fee_parameters", {
  fee: uint64
});
exports.withdraw_permission_delete_operation_fee_parameters = withdraw_permission_delete_operation_fee_parameters;
const committee_member_create_operation_fee_parameters = new Serializer("committee_member_create_operation_fee_parameters", {
  fee: uint64
});
exports.committee_member_create_operation_fee_parameters = committee_member_create_operation_fee_parameters;
const committee_member_update_operation_fee_parameters = new Serializer("committee_member_update_operation_fee_parameters", {
  fee: uint64
});
exports.committee_member_update_operation_fee_parameters = committee_member_update_operation_fee_parameters;
const committee_member_update_global_parameters_operation_fee_parameters = new Serializer("committee_member_update_global_parameters_operation_fee_parameters", {
  fee: uint64
});
exports.committee_member_update_global_parameters_operation_fee_parameters = committee_member_update_global_parameters_operation_fee_parameters;
const vesting_balance_create_operation_fee_parameters = new Serializer("vesting_balance_create_operation_fee_parameters", {
  fee: uint64
});
exports.vesting_balance_create_operation_fee_parameters = vesting_balance_create_operation_fee_parameters;
const vesting_balance_withdraw_operation_fee_parameters = new Serializer("vesting_balance_withdraw_operation_fee_parameters", {
  fee: uint64
});
exports.vesting_balance_withdraw_operation_fee_parameters = vesting_balance_withdraw_operation_fee_parameters;
const worker_create_operation_fee_parameters = new Serializer("worker_create_operation_fee_parameters", {
  fee: uint64
});
exports.worker_create_operation_fee_parameters = worker_create_operation_fee_parameters;
const custom_operation_fee_parameters = new Serializer("custom_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.custom_operation_fee_parameters = custom_operation_fee_parameters;
const assert_operation_fee_parameters = new Serializer("assert_operation_fee_parameters", {
  fee: uint64
});
exports.assert_operation_fee_parameters = assert_operation_fee_parameters;
const balance_claim_operation_fee_parameters = new Serializer("balance_claim_operation_fee_parameters");
exports.balance_claim_operation_fee_parameters = balance_claim_operation_fee_parameters;
const override_transfer_operation_fee_parameters = new Serializer("override_transfer_operation_fee_parameters", {
  fee: uint64,
  price_per_kbyte: uint32
});
exports.override_transfer_operation_fee_parameters = override_transfer_operation_fee_parameters;
const transfer_to_blind_operation_fee_parameters = new Serializer("transfer_to_blind_operation_fee_parameters", {
  fee: uint64,
  price_per_output: uint32
});
exports.transfer_to_blind_operation_fee_parameters = transfer_to_blind_operation_fee_parameters;
const blind_transfer_operation_fee_parameters = new Serializer("blind_transfer_operation_fee_parameters", {
  fee: uint64,
  price_per_output: uint32
});
exports.blind_transfer_operation_fee_parameters = blind_transfer_operation_fee_parameters;
const transfer_from_blind_operation_fee_parameters = new Serializer("transfer_from_blind_operation_fee_parameters", {
  fee: uint64
});
exports.transfer_from_blind_operation_fee_parameters = transfer_from_blind_operation_fee_parameters;
const asset_settle_cancel_operation_fee_parameters = new Serializer("asset_settle_cancel_operation_fee_parameters");
exports.asset_settle_cancel_operation_fee_parameters = asset_settle_cancel_operation_fee_parameters;
const asset_claim_fees_operation_fee_parameters = new Serializer("asset_claim_fees_operation_fee_parameters", {
  fee: uint64
});
exports.asset_claim_fees_operation_fee_parameters = asset_claim_fees_operation_fee_parameters;
var fee_parameters = static_variant([transfer_operation_fee_parameters, limit_order_create_operation_fee_parameters, limit_order_cancel_operation_fee_parameters, call_order_update_operation_fee_parameters, fill_order_operation_fee_parameters, account_create_operation_fee_parameters, account_update_operation_fee_parameters, account_whitelist_operation_fee_parameters, account_upgrade_operation_fee_parameters, account_transfer_operation_fee_parameters, asset_create_operation_fee_parameters, asset_update_operation_fee_parameters, asset_update_bitasset_operation_fee_parameters, asset_update_feed_producers_operation_fee_parameters, asset_issue_operation_fee_parameters, asset_reserve_operation_fee_parameters, asset_fund_fee_pool_operation_fee_parameters, asset_settle_operation_fee_parameters, asset_global_settle_operation_fee_parameters, asset_publish_feed_operation_fee_parameters, witness_create_operation_fee_parameters, witness_update_operation_fee_parameters, proposal_create_operation_fee_parameters, proposal_update_operation_fee_parameters, proposal_delete_operation_fee_parameters, withdraw_permission_create_operation_fee_parameters, withdraw_permission_update_operation_fee_parameters, withdraw_permission_claim_operation_fee_parameters, withdraw_permission_delete_operation_fee_parameters, committee_member_create_operation_fee_parameters, committee_member_update_operation_fee_parameters, committee_member_update_global_parameters_operation_fee_parameters, vesting_balance_create_operation_fee_parameters, vesting_balance_withdraw_operation_fee_parameters, worker_create_operation_fee_parameters, custom_operation_fee_parameters, assert_operation_fee_parameters, balance_claim_operation_fee_parameters, override_transfer_operation_fee_parameters, transfer_to_blind_operation_fee_parameters, blind_transfer_operation_fee_parameters, transfer_from_blind_operation_fee_parameters, asset_settle_cancel_operation_fee_parameters, asset_claim_fees_operation_fee_parameters, asset_settle_cancel_operation_fee_parameters, initiate_crowdfund_operation_fee_parameters, participate_crowdfund_operation_fee_parameters, withdraw_crowdfund_operation_fee_parameters]);
const fee_schedule = new Serializer("fee_schedule", {
  parameters: set(fee_parameters),
  scale: uint32
});
exports.fee_schedule = fee_schedule;
const void_result = new Serializer("void_result");
exports.void_result = void_result;
const asset = new Serializer("asset", {
  amount: int64,
  asset_id: protocol_id_type("asset")
});
exports.asset = asset;
var operation_result = static_variant([void_result, object_id_type, asset]);
const processed_transaction = new Serializer("processed_transaction", {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  signatures: array(bytes(65)),
  operation_results: array(operation_result)
});
exports.processed_transaction = processed_transaction;
const signed_block = new Serializer("signed_block", {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type("witness"),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions),
  witness_signature: bytes(65),
  transactions: array(processed_transaction)
});
exports.signed_block = signed_block;
const block_header = new Serializer("block_header", {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type("witness"),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions)
});
exports.block_header = block_header;
const signed_block_header = new Serializer("signed_block_header", {
  previous: bytes(20),
  timestamp: time_point_sec,
  witness: protocol_id_type("witness"),
  transaction_merkle_root: bytes(20),
  extensions: set(future_extensions),
  witness_signature: bytes(65)
});
exports.signed_block_header = signed_block_header;
const memo_data = new Serializer("memo_data", {
  from: public_key,
  to: public_key,
  nonce: uint64,
  message: bytes()
});
exports.memo_data = memo_data;
const transfer = new Serializer("transfer", {
  fee: asset,
  from: protocol_id_type("account"),
  to: protocol_id_type("account"),
  amount: asset,
  memo: optional(memo_data),
  extensions: set(future_extensions)
});
exports.transfer = transfer;
const limit_order_create = new Serializer("limit_order_create", {
  fee: asset,
  seller: protocol_id_type("account"),
  amount_to_sell: asset,
  min_to_receive: asset,
  expiration: time_point_sec,
  fill_or_kill: bool,
  extensions: set(future_extensions)
});
exports.limit_order_create = limit_order_create;
const limit_order_cancel = new Serializer("limit_order_cancel", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  order: protocol_id_type("limit_order"),
  extensions: set(future_extensions)
});
exports.limit_order_cancel = limit_order_cancel;
const call_order_update = new Serializer("call_order_update", {
  fee: asset,
  funding_account: protocol_id_type("account"),
  delta_collateral: asset,
  delta_debt: asset,
  extensions: set(future_extensions)
});
exports.call_order_update = call_order_update;
const fill_order = new Serializer("fill_order", {
  fee: asset,
  order_id: object_id_type,
  account_id: protocol_id_type("account"),
  pays: asset,
  receives: asset
});
exports.fill_order = fill_order;
const authority = new Serializer("authority", {
  weight_threshold: uint32,
  account_auths: map(protocol_id_type("account"), uint16),
  key_auths: map(public_key, uint16),
  address_auths: map(address, uint16)
});
exports.authority = authority;
const account_options = new Serializer("account_options", {
  memo_key: public_key,
  voting_account: protocol_id_type("account"),
  num_witness: uint16,
  num_committee: uint16,
  votes: set(vote_id),
  extensions: set(future_extensions)
});
exports.account_options = account_options;
const account_create = new Serializer("account_create", {
  fee: asset,
  registrar: protocol_id_type("account"),
  referrer: protocol_id_type("account"),
  referrer_percent: uint16,
  name: string,
  owner: authority,
  active: authority,
  options: account_options,
  extensions: set(future_extensions)
});
exports.account_create = account_create;
const account_update = new Serializer("account_update", {
  fee: asset,
  account: protocol_id_type("account"),
  owner: optional(authority),
  active: optional(authority),
  new_options: optional(account_options),
  extensions: set(future_extensions)
});
exports.account_update = account_update;
const account_whitelist = new Serializer("account_whitelist", {
  fee: asset,
  authorizing_account: protocol_id_type("account"),
  account_to_list: protocol_id_type("account"),
  new_listing: uint8,
  extensions: set(future_extensions)
});
exports.account_whitelist = account_whitelist;
const account_upgrade = new Serializer("account_upgrade", {
  fee: asset,
  account_to_upgrade: protocol_id_type("account"),
  upgrade_to_lifetime_member: bool,
  extensions: set(future_extensions)
});
exports.account_upgrade = account_upgrade;
const account_transfer = new Serializer("account_transfer", {
  fee: asset,
  account_id: protocol_id_type("account"),
  new_owner: protocol_id_type("account"),
  extensions: set(future_extensions)
});
exports.account_transfer = account_transfer;
const price = new Serializer("price", {
  base: asset,
  quote: asset
});
exports.price = price;
const asset_options = new Serializer("asset_options", {
  max_supply: int64,
  market_fee_percent: uint16,
  max_market_fee: int64,
  issuer_permissions: uint16,
  flags: uint16,
  core_exchange_rate: price,
  whitelist_authorities: set(protocol_id_type("account")),
  blacklist_authorities: set(protocol_id_type("account")),
  whitelist_markets: set(protocol_id_type("asset")),
  blacklist_markets: set(protocol_id_type("asset")),
  description: string,
  extensions: set(future_extensions)
});
exports.asset_options = asset_options;
const bitasset_options = new Serializer("bitasset_options", {
  feed_lifetime_sec: uint32,
  minimum_feeds: uint8,
  force_settlement_delay_sec: uint32,
  force_settlement_offset_percent: uint16,
  maximum_force_settlement_volume: uint16,
  short_backing_asset: protocol_id_type("asset"),
  extensions: set(future_extensions)
});
exports.bitasset_options = bitasset_options;
const asset_create = new Serializer("asset_create", {
  fee: asset,
  issuer: protocol_id_type("account"),
  symbol: string,
  precision: uint8,
  common_options: asset_options,
  bitasset_opts: optional(bitasset_options),
  is_prediction_market: bool,
  extensions: set(future_extensions)
});
exports.asset_create = asset_create;
const asset_update = new Serializer("asset_update", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_update: protocol_id_type("asset"),
  new_issuer: optional(protocol_id_type("account")),
  new_options: asset_options,
  extensions: set(future_extensions)
});
exports.asset_update = asset_update;
const asset_update_bitasset = new Serializer("asset_update_bitasset", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_update: protocol_id_type("asset"),
  new_options: bitasset_options,
  extensions: set(future_extensions)
});
exports.asset_update_bitasset = asset_update_bitasset;
const asset_update_feed_producers = new Serializer("asset_update_feed_producers", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_update: protocol_id_type("asset"),
  new_feed_producers: set(protocol_id_type("account")),
  extensions: set(future_extensions)
});
exports.asset_update_feed_producers = asset_update_feed_producers;
const asset_issue = new Serializer("asset_issue", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_issue: asset,
  issue_to_account: protocol_id_type("account"),
  memo: optional(memo_data),
  extensions: set(future_extensions)
});
exports.asset_issue = asset_issue;
const asset_reserve = new Serializer("asset_reserve", {
  fee: asset,
  payer: protocol_id_type("account"),
  amount_to_reserve: asset,
  extensions: set(future_extensions)
});
exports.asset_reserve = asset_reserve;
const asset_fund_fee_pool = new Serializer("asset_fund_fee_pool", {
  fee: asset,
  from_account: protocol_id_type("account"),
  asset_id: protocol_id_type("asset"),
  amount: int64,
  extensions: set(future_extensions)
});
exports.asset_fund_fee_pool = asset_fund_fee_pool;
const asset_settle = new Serializer("asset_settle", {
  fee: asset,
  account: protocol_id_type("account"),
  amount: asset,
  extensions: set(future_extensions)
});
exports.asset_settle = asset_settle;
const asset_global_settle = new Serializer("asset_global_settle", {
  fee: asset,
  issuer: protocol_id_type("account"),
  asset_to_settle: protocol_id_type("asset"),
  settle_price: price,
  extensions: set(future_extensions)
});
exports.asset_global_settle = asset_global_settle;
const participate_crowdfund = new Serializer("participate_crowdfund", {
  fee: asset,
  buyer: protocol_id_type("account"),
  valuation: int64,
  cap: int64,
  // pubkey: address,
  crowdfund: protocol_id_type("crowdfund") // extensions: set(future_extensions)

});
exports.participate_crowdfund = participate_crowdfund;
const withdraw_crowdfund = new Serializer("withdraw_crowdfund", {
  fee: asset,
  buyer: protocol_id_type("account"),
  crowdfund_contract: protocol_id_type("crowdfund_contract")
});
exports.withdraw_crowdfund = withdraw_crowdfund;
const initiate_crowdfund = new Serializer("initiate_crowdfund", {
  fee: asset,
  owner: protocol_id_type("account"),
  asset_id: protocol_id_type("asset"),
  t: uint64,
  u: uint64 // v: uint64,
  // extensions: set(future_extensions)

});
exports.initiate_crowdfund = initiate_crowdfund;
const price_feed = new Serializer("price_feed", {
  settlement_price: price,
  maintenance_collateral_ratio: uint16,
  maximum_short_squeeze_ratio: uint16,
  core_exchange_rate: price
});
exports.price_feed = price_feed;
const asset_publish_feed = new Serializer("asset_publish_feed", {
  fee: asset,
  publisher: protocol_id_type("account"),
  asset_id: protocol_id_type("asset"),
  feed: price_feed,
  extensions: set(future_extensions)
});
exports.asset_publish_feed = asset_publish_feed;
const witness_create = new Serializer("witness_create", {
  fee: asset,
  witness_account: protocol_id_type("account"),
  url: string,
  block_signing_key: public_key
});
exports.witness_create = witness_create;
const witness_update = new Serializer("witness_update", {
  fee: asset,
  witness: protocol_id_type("witness"),
  witness_account: protocol_id_type("account"),
  new_url: optional(string),
  new_signing_key: optional(public_key)
});
exports.witness_update = witness_update;
const op_wrapper = new Serializer("op_wrapper", {
  op: operation
});
exports.op_wrapper = op_wrapper;
op_wrapper.nosort = true;
const proposal_create = new Serializer("proposal_create", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  expiration_time: time_point_sec,
  proposed_ops: array(op_wrapper),
  review_period_seconds: optional(uint32),
  extensions: set(future_extensions)
});
exports.proposal_create = proposal_create;
const proposal_update = new Serializer("proposal_update", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  proposal: protocol_id_type("proposal"),
  active_approvals_to_add: set(protocol_id_type("account")),
  active_approvals_to_remove: set(protocol_id_type("account")),
  owner_approvals_to_add: set(protocol_id_type("account")),
  owner_approvals_to_remove: set(protocol_id_type("account")),
  key_approvals_to_add: set(public_key),
  key_approvals_to_remove: set(public_key),
  extensions: set(future_extensions)
});
exports.proposal_update = proposal_update;
const proposal_delete = new Serializer("proposal_delete", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  using_owner_authority: bool,
  proposal: protocol_id_type("proposal"),
  extensions: set(future_extensions)
});
exports.proposal_delete = proposal_delete;
const withdraw_permission_create = new Serializer("withdraw_permission_create", {
  fee: asset,
  withdraw_from_account: protocol_id_type("account"),
  authorized_account: protocol_id_type("account"),
  withdrawal_limit: asset,
  withdrawal_period_sec: uint32,
  periods_until_expiration: uint32,
  period_start_time: time_point_sec
});
exports.withdraw_permission_create = withdraw_permission_create;
const withdraw_permission_update = new Serializer("withdraw_permission_update", {
  fee: asset,
  withdraw_from_account: protocol_id_type("account"),
  authorized_account: protocol_id_type("account"),
  permission_to_update: protocol_id_type("withdraw_permission"),
  withdrawal_limit: asset,
  withdrawal_period_sec: uint32,
  period_start_time: time_point_sec,
  periods_until_expiration: uint32
});
exports.withdraw_permission_update = withdraw_permission_update;
const withdraw_permission_claim = new Serializer("withdraw_permission_claim", {
  fee: asset,
  withdraw_permission: protocol_id_type("withdraw_permission"),
  withdraw_from_account: protocol_id_type("account"),
  withdraw_to_account: protocol_id_type("account"),
  amount_to_withdraw: asset,
  memo: optional(memo_data)
});
exports.withdraw_permission_claim = withdraw_permission_claim;
const withdraw_permission_delete = new Serializer("withdraw_permission_delete", {
  fee: asset,
  withdraw_from_account: protocol_id_type("account"),
  authorized_account: protocol_id_type("account"),
  withdrawal_permission: protocol_id_type("withdraw_permission")
});
exports.withdraw_permission_delete = withdraw_permission_delete;
const committee_member_create = new Serializer("committee_member_create", {
  fee: asset,
  committee_member_account: protocol_id_type("account"),
  url: string
});
exports.committee_member_create = committee_member_create;
const committee_member_update = new Serializer("committee_member_update", {
  fee: asset,
  committee_member: protocol_id_type("committee_member"),
  committee_member_account: protocol_id_type("account"),
  new_url: optional(string)
});
exports.committee_member_update = committee_member_update;
const chain_parameters = new Serializer("chain_parameters", {
  current_fees: fee_schedule,
  block_interval: uint8,
  maintenance_interval: uint32,
  maintenance_skip_slots: uint8,
  committee_proposal_review_period: uint32,
  maximum_transaction_size: uint32,
  maximum_block_size: uint32,
  maximum_time_until_expiration: uint32,
  maximum_proposal_lifetime: uint32,
  maximum_asset_whitelist_authorities: uint8,
  maximum_asset_feed_publishers: uint8,
  maximum_witness_count: uint16,
  maximum_committee_count: uint16,
  maximum_authority_membership: uint16,
  reserve_percent_of_fee: uint16,
  network_percent_of_fee: uint16,
  lifetime_referrer_percent_of_fee: uint16,
  cashback_vesting_period_seconds: uint32,
  cashback_vesting_threshold: int64,
  count_non_member_votes: bool,
  allow_non_member_whitelists: bool,
  witness_pay_per_block: int64,
  worker_budget_per_day: int64,
  max_predicate_opcode: uint16,
  fee_liquidation_threshold: int64,
  accounts_per_fee_scale: uint16,
  account_fee_scale_bitshifts: uint8,
  max_authority_depth: uint8,
  extensions: set(future_extensions)
});
exports.chain_parameters = chain_parameters;
const committee_member_update_global_parameters = new Serializer("committee_member_update_global_parameters", {
  fee: asset,
  new_parameters: chain_parameters
});
exports.committee_member_update_global_parameters = committee_member_update_global_parameters;
const linear_vesting_policy_initializer = new Serializer("linear_vesting_policy_initializer", {
  begin_timestamp: time_point_sec,
  vesting_cliff_seconds: uint32,
  vesting_duration_seconds: uint32
});
exports.linear_vesting_policy_initializer = linear_vesting_policy_initializer;
const cdd_vesting_policy_initializer = new Serializer("cdd_vesting_policy_initializer", {
  start_claim: time_point_sec,
  vesting_seconds: uint32
});
exports.cdd_vesting_policy_initializer = cdd_vesting_policy_initializer;
var vesting_policy_initializer = static_variant([linear_vesting_policy_initializer, cdd_vesting_policy_initializer]);
const vesting_balance_create = new Serializer("vesting_balance_create", {
  fee: asset,
  creator: protocol_id_type("account"),
  owner: protocol_id_type("account"),
  amount: asset,
  policy: vesting_policy_initializer
});
exports.vesting_balance_create = vesting_balance_create;
const vesting_balance_withdraw = new Serializer("vesting_balance_withdraw", {
  fee: asset,
  vesting_balance: protocol_id_type("vesting_balance"),
  owner: protocol_id_type("account"),
  amount: asset
});
exports.vesting_balance_withdraw = vesting_balance_withdraw;
const refund_worker_initializer = new Serializer("refund_worker_initializer");
exports.refund_worker_initializer = refund_worker_initializer;
const vesting_balance_worker_initializer = new Serializer("vesting_balance_worker_initializer", {
  pay_vesting_period_days: uint16
});
exports.vesting_balance_worker_initializer = vesting_balance_worker_initializer;
const burn_worker_initializer = new Serializer("burn_worker_initializer");
exports.burn_worker_initializer = burn_worker_initializer;
var worker_initializer = static_variant([refund_worker_initializer, vesting_balance_worker_initializer, burn_worker_initializer]);
const worker_create = new Serializer("worker_create", {
  fee: asset,
  owner: protocol_id_type("account"),
  work_begin_date: time_point_sec,
  work_end_date: time_point_sec,
  daily_pay: int64,
  name: string,
  url: string,
  initializer: worker_initializer
});
exports.worker_create = worker_create;
const custom = new Serializer("custom", {
  fee: asset,
  payer: protocol_id_type("account"),
  required_auths: set(protocol_id_type("account")),
  id: uint16,
  data: bytes()
});
exports.custom = custom;
const account_name_eq_lit_predicate = new Serializer("account_name_eq_lit_predicate", {
  account_id: protocol_id_type("account"),
  name: string
});
exports.account_name_eq_lit_predicate = account_name_eq_lit_predicate;
const asset_symbol_eq_lit_predicate = new Serializer("asset_symbol_eq_lit_predicate", {
  asset_id: protocol_id_type("asset"),
  symbol: string
});
exports.asset_symbol_eq_lit_predicate = asset_symbol_eq_lit_predicate;
const block_id_predicate = new Serializer("block_id_predicate", {
  id: bytes(20)
});
exports.block_id_predicate = block_id_predicate;
var predicate = static_variant([account_name_eq_lit_predicate, asset_symbol_eq_lit_predicate, block_id_predicate]);
const assert = new Serializer("assert", {
  fee: asset,
  fee_paying_account: protocol_id_type("account"),
  predicates: array(predicate),
  required_auths: set(protocol_id_type("account")),
  extensions: set(future_extensions)
});
exports.assert = assert;
const balance_claim = new Serializer("balance_claim", {
  fee: asset,
  deposit_to_account: protocol_id_type("account"),
  balance_to_claim: protocol_id_type("balance"),
  balance_owner_key: public_key,
  total_claimed: asset
});
exports.balance_claim = balance_claim;
const override_transfer = new Serializer("override_transfer", {
  fee: asset,
  issuer: protocol_id_type("account"),
  from: protocol_id_type("account"),
  to: protocol_id_type("account"),
  amount: asset,
  memo: optional(memo_data),
  extensions: set(future_extensions)
});
exports.override_transfer = override_transfer;
const stealth_confirmation = new Serializer("stealth_confirmation", {
  one_time_key: public_key,
  to: optional(public_key),
  encrypted_memo: bytes()
});
exports.stealth_confirmation = stealth_confirmation;
const blind_output = new Serializer("blind_output", {
  commitment: bytes(33),
  range_proof: bytes(),
  owner: authority,
  stealth_memo: optional(stealth_confirmation)
});
exports.blind_output = blind_output;
const transfer_to_blind = new Serializer("transfer_to_blind", {
  fee: asset,
  amount: asset,
  from: protocol_id_type("account"),
  blinding_factor: bytes(32),
  outputs: array(blind_output)
});
exports.transfer_to_blind = transfer_to_blind;
const blind_input = new Serializer("blind_input", {
  commitment: bytes(33),
  owner: authority
});
exports.blind_input = blind_input;
const blind_transfer = new Serializer("blind_transfer", {
  fee: asset,
  inputs: array(blind_input),
  outputs: array(blind_output)
});
exports.blind_transfer = blind_transfer;
const transfer_from_blind = new Serializer("transfer_from_blind", {
  fee: asset,
  amount: asset,
  to: protocol_id_type("account"),
  blinding_factor: bytes(32),
  inputs: array(blind_input)
});
exports.transfer_from_blind = transfer_from_blind;
const asset_settle_cancel = new Serializer("asset_settle_cancel", {
  fee: asset,
  settlement: protocol_id_type("force_settlement"),
  account: protocol_id_type("account"),
  amount: asset,
  extensions: set(future_extensions)
});
exports.asset_settle_cancel = asset_settle_cancel;
const asset_claim_fees = new Serializer("asset_claim_fees", {
  fee: asset,
  issuer: protocol_id_type("account"),
  amount_to_claim: asset,
  extensions: set(future_extensions)
});
exports.asset_claim_fees = asset_claim_fees;
operation.st_operations = [transfer, limit_order_create, limit_order_cancel, call_order_update, fill_order, account_create, account_update, account_whitelist, account_upgrade, account_transfer, asset_create, asset_update, asset_update_bitasset, asset_update_feed_producers, asset_issue, asset_reserve, asset_fund_fee_pool, asset_settle, asset_global_settle, asset_publish_feed, witness_create, witness_update, proposal_create, proposal_update, proposal_delete, withdraw_permission_create, withdraw_permission_update, withdraw_permission_claim, withdraw_permission_delete, committee_member_create, committee_member_update, committee_member_update_global_parameters, vesting_balance_create, vesting_balance_withdraw, worker_create, custom, assert, balance_claim, override_transfer, transfer_to_blind, blind_transfer, transfer_from_blind, asset_settle_cancel, asset_claim_fees, asset_settle_cancel, initiate_crowdfund, participate_crowdfund, withdraw_crowdfund];
const transaction = new Serializer("transaction", {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions)
});
exports.transaction = transaction;
const signed_transaction = new Serializer("signed_transaction", {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  signatures: array(bytes(65))
}); //# -------------------------------
//#  Generated code end
//# -------------------------------
// Custom Types

exports.signed_transaction = signed_transaction;
const stealth_memo_data = new Serializer("stealth_memo_data", {
  from: optional(public_key),
  amount: asset,
  blinding_factor: bytes(32),
  commitment: bytes(33),
  check: uint32
});
exports.stealth_memo_data = stealth_memo_data;
const fund_query = new Serializer("fund_query", {
  accountName: string,
  asset: optional(string),
  fundType: optional(string),
  size: optional(uint32),
  offset: optional(uint32),
  expiration: time_point_sec
}); // var stealth_confirmation = new Serializer(
//     "stealth_confirmation", {
//     one_time_key: public_key,
//     to: optional( public_key ),
//     encrypted_memo: stealth_memo_data
// })

exports.fund_query = fund_query;