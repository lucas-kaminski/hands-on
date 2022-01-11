const express = require('express')
const intranetRoutes = require('./routes/intranet.routes')

const app = express()
const PORT = 5000


app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}`)
  next()
})

app.get('/', (req, res) => {
  res.json({ status: 'PONG' })
})

app.use('/SOAGateway/Endpoint/REST/intranet', intranetRoutes)

app.listen(PORT, () => console.log(`Connected to ${PORT}`))