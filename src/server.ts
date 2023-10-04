import 'express-async-errors'
import express, { json } from 'express'

import cors from 'cors'

import rCachepots from './routes/cachepots.routes'
import rPlants from './routes/plants.routes'
import rStock from './routes/stock.routes'

const app = express()

app
  .use(json())
  .use(cors())

  .use((req, res, next) => {
    console.log(' + ', req.path, '[', req.method, ']')
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    next()
  })

  .use('/plants', rPlants)
<<<<<<< HEAD
  .use('/stock', rStock)
=======
  .use('/cachepots', rCachepots)
>>>>>>> 56d6a393608d63a6aaf1271b07f79d6a10b82ceb

  .get('/', async (_, res) => {
    return res.json('Server amago!')
  })

  .listen(3333, () => {
    console.log(`✔ server is running on port 3333`)
  })
