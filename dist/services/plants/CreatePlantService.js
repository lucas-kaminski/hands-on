"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();

class CreatePlantService {
  async run({
    description,
    name,
    purchase_price,
    collection
  }) {
    if (!name || !collection) {
      throw new Error('name is required');
    }

    const plant = await prisma.plants.create({
      data: {
        description,
        collection,
        name,
        purchase_price: Number(purchase_price)
      }
    });
    return plant;
  }

}

var _default = CreatePlantService;
exports.default = _default;