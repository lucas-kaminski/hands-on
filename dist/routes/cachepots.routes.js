"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CachepotsController = _interopRequireDefault(require("../controllers/cachepots/CachepotsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rCachepots = (0, _express.Router)();
const cachepotsController = new _CachepotsController.default(); // rCachepots: '/v2/cachepots' +

rCachepots.get('/', cachepotsController.index);
var _default = rCachepots;
exports.default = _default;