"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = emitter;

// import ee from "event-emitter";
let ee = require('event-emitter');

var _emitter;

function emitter() {
  if (!_emitter) {
    _emitter = ee({});
  }

  return _emitter;
}

module.exports = exports.default;