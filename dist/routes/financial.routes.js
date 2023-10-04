"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _FinancialController = _interopRequireDefault(require("../controllers/financial/FinancialController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rFinancial = (0, _express.Router)();
const financialController = new _FinancialController.default(); // rUser: '/v2/financial' +

rFinancial.get('/', financialController.index);
var _default = rFinancial;
exports.default = _default;