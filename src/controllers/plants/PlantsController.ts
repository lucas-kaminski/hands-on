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
    const { name, description, propagation_id, collection } = req.query
    console.log(name, description, propagation_id, collection)
    const plant = await createPlant.run({
      name: name as string,
      description: description as string,
      propagation_id: Number(propagation_id),
      collection: collection as plant_collection,
    })
    return resp.status(200).json(plant)
  }
}

export default PlantsController
