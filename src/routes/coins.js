var express = require('express')

const { selectAllUsers, selectAllChannels } = require('../database/queries')
const listarmoedas = require('../commands/listarmoedas')
const { insert } = require('../commands/listarmoedas/insert')
const { sendMessage } = require('../api/telegram')

const router = express.Router()

// Webhook para quando ser cadastrado uma moeda no outro sistema, o bot envia uma mensagem para o usuário avisando e mostrando a listagem
router.post('/new', async (req, res) => {
  try {
    insert({ moeda: { symbol: req.body.symbol, last_price: req.body.last_price } })
  } catch (error) {
    console.error(error)
  }

  try {
    const users = await selectAllUsers()
    users.forEach(user => {
      sendMessage(user.fromId, `Moeda ${req.body.symbol} adicionada, confira a nova listagem!`)
      listarmoedas({ chatId: user.fromId })
    })

    const channels = await selectAllChannels()
    channels.forEach(channel => {
      try {
        sendMessage(channel.channelId, `Moeda ${req.body.symbol} adicionada, confira a nova listagem!`)
        listarmoedas({ chatId: channel.channelId })
      } catch (error) {
        console.error(error)
      }
    })
  } catch (error) {
    console.error(error)
  }

  res.send('Nova moeda adicionada!')
})

module.exports = router