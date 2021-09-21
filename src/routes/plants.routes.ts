import { Router } from 'express'

import PlantsController from '@controllers/plants/PlantsController'

const rPlants = Router()
const plantsController = new PlantsController()

// rUser: '/plants' +
rPlants.post('/', plantsController.create).get('/', plantsController.index)

export default rPlants
