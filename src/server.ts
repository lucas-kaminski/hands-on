import 'express-async-errors'
import express, { json } from 'express'

const app = express()

app
  .use(json())
  .use((req, _, next) => {
    console.log(' + ', req.path, '[', req.method, ']')
    next()
  })
  .listen(3333, () => {
    console.log(`✔ server is running on port 3333`)
  })
