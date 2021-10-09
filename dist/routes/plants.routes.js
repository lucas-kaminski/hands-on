"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _PlantsController = _interopRequireDefault(require("../controllers/plants/PlantsController"));

var _PropagationController = _interopRequireDefault(require("../controllers/plants/PropagationController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rPlants = (0, _express.Router)();
const plantsController = new _PlantsController.default();
const propagationController = new _PropagationController.default(); // rPlants: '/plants' +

rPlants.post('/', plantsController.create).get('/', plantsController.index) // /propagations
.post('/propagations', propagationController.index).get('/propagations', propagationController.index);
var _default = rPlants;
exports.default = _default;