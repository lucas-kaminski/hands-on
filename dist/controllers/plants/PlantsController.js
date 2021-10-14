"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreatePlantService = _interopRequireDefault(require("../../services/plants/CreatePlantService"));

var _IndexPlantsService = _interopRequireDefault(require("../../services/plants/IndexPlantsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexPlant = new _IndexPlantsService.default();
const createPlant = new _CreatePlantService.default();

class PlantsController {
  async index(req, resp) {
    const {
      collection
    } = req.query;
    const plants = await indexPlant.run({
      collection: collection
    });
    return resp.status(200).json(plants);
  }

  async create(req, resp) {
    const {
      name,
      description,
      purchase_price,
      collection
    } = req.body;
    console.log(req.body);
    const plant = await createPlant.run({
      name: name,
      description: description,
      purchase_price: purchase_price,
      collection: collection
    });
    return resp.status(200).json(plant);
  }

}

var _default = PlantsController;
exports.default = _default;