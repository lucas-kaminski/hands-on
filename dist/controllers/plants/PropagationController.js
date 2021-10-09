"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class PropagationController {
  async index(req, resp) {
    // await createClassgroup.run()
    return resp.status(200).json();
  }

}

var _default = PropagationController;
exports.default = _default;