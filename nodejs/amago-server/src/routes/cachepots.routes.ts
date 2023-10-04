import { Router } from 'express'

import CachepotsController from '@controllers/cachepots/CachepotsController'

const rCachepots = Router()
const cachepotsController = new CachepotsController()

// rCachepots: '/v2/cachepots' +
rCachepots.get('/', cachepotsController.index)

export default rCachepots
