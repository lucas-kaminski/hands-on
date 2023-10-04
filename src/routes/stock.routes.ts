import { Router } from 'express'

import StockPlantsController from '@controllers/stock/StockPlantsController'

const rStock = Router()
const plantsController = new StockPlantsController()

// rUser: '/stock' +
rStock.post('/plants', plantsController.create)

export default rStock
