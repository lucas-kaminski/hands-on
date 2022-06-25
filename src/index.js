const express = require('express')
require('dotenv').config()

const { sendContact, sendLocation, sendMessage, sendPhoto, sendVenue } = require('./methods')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  const chatId = req.body.message.chat.id
  const receivedMessage = req.body.message.text

  console.log(receivedMessage)

  if (receivedMessage.includes('/teste')) {
    sendMessage(chatId, 'Teste')
  } else if (receivedMessage.includes('/photo')) {
    sendPhoto(chatId, 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  } else if (receivedMessage.includes('/contact')) {
    sendContact(chatId, '+5511999999999', 'Teste', 'Teste')
  } else if (receivedMessage.includes('/location')) {
    sendLocation(chatId, '-23.5489', '-46.6388')
  } else if (receivedMessage.includes('/venue')) {
    sendVenue(chatId, '-23.5489', '-46.6388', 'Teste', 'Teste')
  }

  res.send('OK')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT)
})