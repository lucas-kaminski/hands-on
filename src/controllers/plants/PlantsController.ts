import { Request, Response } from 'express'

import CreateNewPlantService from '@services/plants/CreateNewPlantService'
import IndexPlantsService from '@services/plants/IndexPlantsService'

import { plant_collection } from '.prisma/client'

const indexPlant = new IndexPlantsService()
const createPlant = new CreateNewPlantService()

class PlantsController {
  async index(req: Request, resp: Response) {
    const { collection } = req.query
    const plants = await indexPlant.run({
      collection: collection as plant_collection,
    })
    return resp.status(200).json(plants)
  }

  async create(req: Request, resp: Response) {
    const { name, description, purchase_price, collection } = req.query
    const plant = await createPlant.run({
      name: name as string,
      description: description as string,
      purchase_price: Number((purchase_price as string).replace(',', '.')),
      collection: collection as plant_collection,
    })
    return resp.status(200).json(plant)
  }
}

export default PlantsController
