import 'express-async-errors'
import express, { json } from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app
  .use(json())
  .use((req, _, next) => {
    console.log(' + ', req.path, '[', req.method, ']')
    next()
  })
  .get('/', async (_, res) => {
    return res.json('Server da âmago está no ar!')
  })
  .listen(3333, () => {
    console.log(`✔ server is running on port 3333`)
  })
