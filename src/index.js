const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const rConfig = require('./routes/config')
const rCoins = require('./routes/coins')
const rTelegram = require('./routes/telegram')
const rStripe = require('./routes/stripe')

const app = express()

// log
app.use((req, _, next) => {
  console.info(`${req.method} ${req.url}`)
  next()
})

// json body parser, original in req.rawBody
app.use(bodyParser.json({
  verify: (req, _, buf) => {
    req.rawBody = buf // used to validate stripe webhooks
  }
}))

// Routes
// Admin
app.use('/config', rConfig)

// Webhooks
app.use('/telegram', rTelegram)
app.use('/stripe', rStripe)

// Demos
app.use('/coins', rCoins)

// Ping
app.get('/', async (_, res) => {
  res.send('Hello World!')
})

// Start server
app.listen(process.env.PORT, () => {
  console.info('Server is running on port ' + process.env.PORT)
})