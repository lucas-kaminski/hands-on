const express = require('express')
const { sendMessage } = require('../api/telegram')

const messageValidation = require('../middleware/messageValidation')

router = express.Router()

const commandsInJsonFormat = require('../json/config/commands.json')
const commands = []
commandsInJsonFormat['commands'].forEach(i => {
  commands.push(i['command'])
})

// Rota do webhook do bot (update de mensagens do Telegram). Tem a validação do tipo de mensagem pelo middleware messageValidation
// Possui dados na req.body definidos no messageValidation
// (Atualmente configurado para receber comandos via mensagem direta telegram, para canais, só realiza o cadastro no middleware)
router.post('/', messageValidation, async (req, res) => {
  console.info(`Id do chat    : ` + req.body.chatId)
  console.info(`Id da mensagem:  ${req.body.messageId}`)
  // Verifica qual o tipo de mensagem definido no messageValidation
  if (req.body.messageType === 'message') {

    // Mensagem direta

    // verifica se a mensagem é um comando, caso não, retorna mensagem de erro
    if (!req.body.receivedMessage.startsWith('/')) {
      sendMessage(req.body.chatId, 'Não foi identificar o comando, tente novamente ou digite /help para mais informações')
      return res.status(200).json({ ok: true })
    }

    // verifica se o comando é um dos aceitos, caso não, retorna mensagem de erro
    if (!commands.includes(req.body.receivedMessage.replace('/', ''))) {
      sendMessage(req.body.chatId, 'Comando inválido, tente novamente ou digite /help para mais informações')
      return res.status(200).json({ ok: true })
    }

    // caso chegue aqui, é um comando válido, então importa o comando e executa a função relacionada a ele
    const command = require('../commands' + req.body.receivedMessage)
    const result = command({ chatId: req.body.chatId, user: req.body.user })

    return res.status(200).json(result)
  } else if (req.body.messageType === 'channel') {
    // Mensagem recebida por um canal
    return res.status(200).json({ ok: true })
  } else if (req.body.messageType === 'callback') {

    // Mensagem recebida por um callback
    const callbackPath = req.body.receivedMessage.split(':')
    const callback = require('../commands' + callbackPath[0])
    callback({ chatId: req.body.chatId, user: req.body.user, messageId: req.body.messageId, callbackData: callbackPath[1] })

    return res.status(200).json({ ok: true })
  } else {
    // Mensagem não reconhecida
    // TODO: APAGAR LINHA ABAIXO QND VALIDAR
    sendMessage('001 - Tipo de mensagem não identificado')
    return res.status(200).json({ ok: true })
  }

})

module.exports = router