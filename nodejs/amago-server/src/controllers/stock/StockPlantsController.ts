import { Request, Response } from 'express'

import CreateNewStockPlantService from '@services/stock/plants/CreateNewStockPlantService'

const createStockPlant = new CreateNewStockPlantService()

class StockPlantsController {
  async create(req: Request, resp: Response) {
    const { id } = req.query
    console.log(id, 'id')
    const stock = await createStockPlant.run({ plant_id: Number(id) })
    return resp.status(200).json(stock)
  }
}

export default StockPlantsController
