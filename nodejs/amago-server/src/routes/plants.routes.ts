import { Router } from 'express'

import PlantsController from '@controllers/plants/PlantsController'
import PropagationController from '@controllers/plants/PropagationController'

const rPlants = Router()
const plantsController = new PlantsController()
const propagationController = new PropagationController()

// rPlants: '/plants' +
rPlants
  .post('/', plantsController.create)
  .get('/', plantsController.index)

  // /propagations
  .post('/propagations', propagationController.index)
  .get('/propagations', propagationController.index)

export default rPlants
