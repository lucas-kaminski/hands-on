import 'express-async-errors'
import express, { json } from 'express'

import rPlants from './routes/plants.routes'

const app = express()

app
  .use(json())

  .use((req, _, next) => {
    console.log(' + ', req.path, '[', req.method, ']')
    next()
  })

  .use('/plants', rPlants)

  .get('/', async (_, res) => {
    return res.json('Server amago!')
  })

  .listen(3333, () => {
    console.log(`✔ server is running on port 3333`)
  })
