import 'express-async-errors'
import express, { json } from 'express'

import cors from 'cors'

import rCachepots from './routes/cachepots.routes'
import rPlants from './routes/plants.routes'

const app = express()

app
  .use(json())
  .use(cors())

  .use((req, _, next) => {
    console.log(' + ', req.path, '[', req.method, ']')
    next()
  })

  .use('/plants', rPlants)
  .use('/cachepots', rCachepots)

  .get('/', async (_, res) => {
    return res.json('Server amago!')
  })

  .listen(3333, () => {
    console.log(`✔ server is running on port 3333`)
  })
