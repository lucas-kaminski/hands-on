"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FinancialController {
  async index(req, resp) {
    return resp.status(200).json();
  }

}

var _default = FinancialController;
exports.default = _default;