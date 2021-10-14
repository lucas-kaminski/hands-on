import 'express-async-errors'
import express, { json } from 'express'

import rPlants from './routes/plants.routes'
import rStock from './routes/stock.routes'

const app = express()

app
  .use(json())
  .use((req, res, next) => {
    console.log(req.query)
    next()
  })

  .use((req, res, next) => {
    console.log(' + ', req.path, '[', req.method, ']')
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    next()
  })

  .use('/plants', rPlants)
  .use('/stock', rStock)

  .get('/', async (_, res) => {
    return res.json('Server amago!')
  })

  .listen(3333, () => {
    console.log(`✔ server is running on port 3333`)
  })
