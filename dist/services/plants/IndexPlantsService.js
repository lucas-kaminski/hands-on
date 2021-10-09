"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@prisma/client");

const prisma = new _client.PrismaClient();

class IndexPlantsService {
  async run({
    collection
  }) {
    const plants = await prisma.plants.findMany({
      orderBy: {
        name: 'asc'
      },
      where: {
        collection: collection !== '' ? collection : undefined
      }
    });
    return plants;
  }

}

var _default = IndexPlantsService;
exports.default = _default;