const express = require('express')
const intranetRoutes = require('./routes/intranet.routes')
const avariasRoutes = require('./routes/avarias.routes')

const app = express()
const PORT = 5000

app.use((req, _, next) => {
  console.log(`${req.method} request for '${req.url}`)
  next()
})

app.use(express.json())

app.get('/', (_, res) => {
  res.json({ status: 'PONG' })
})

app.use('/SOAGateway/Endpoint/REST/intranet', intranetRoutes)
app.use('/avarias', avariasRoutes)

app.listen(PORT, () => console.log(`Connected to ${PORT}`))