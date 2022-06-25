const express = require('express')
require('dotenv').config()

const { sendMessage, sendMessageWithButtons, editMessage } = require('./methods')
const { isValidEmail, isValidPhone, sleep } = require('./utils')

const app = express()

/*
  - registered users
  fromId: id of the user
  fromName: name of the user
  email: email sended by the user
  phone: phone number sended by the user
  status: awaiting_email, awaiting_phone, registered_now, null
*/
const users = [{}]
const commands = ['/start', '/help', '/settings', '/tutorial']

app.use(express.json())

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {

  //check se a mensagem é um callback de um botão
  if (req.body.callback_query) {
    if (req.body.callback_query.data === 'email') {
      console.log('Atualizando mensagem de e-mail')
      editMessage(req.body.callback_query.message.chat.id, req.body.callback_query.message.message_id, 'Digite seu e-mail')
      return res.status(200).send()
    } else if (req.body.callback_query.data === 'phone') {
      console.log('Atualizando mensagem de telefone')
      editMessage(req.body.callback_query.message.chat.id, req.body.callback_query.message.message_id, 'Digite seu telefone')
      return res.status(200).send()
    }
  }

  // se a mensagem não for um callback, verifica o usuário
  const chatId = req.body.message.chat.id
  let receivedMessage = req.body.message.text
  const fromId = req.body.message.from.id
  const fromName = req.body.message.from.first_name + ' ' + req.body.message.from.last_name

  // check se cadastrado
  let user = users.find(user => user.fromId === fromId)
  let actionDone = false

  if (!user) {
    console.log('Usuário não cadastrado')
    actionDone = true
    const index = users.push({
      fromId: fromId,
      fromName: fromName,
      email: '',
      phone: '',
      status: 'awaiting_email'
    })

    user = users[index - 1]
  } else {
    console.log('Usuário cadastrado: ', user.fromName)
  }

  // mensagem caso seja um novo usuário
  if (actionDone) {
    sendMessage(chatId, 'Olá, ' + fromName + '! \n Bem vindo ao meu bot, você ainda não está cadastrado. \n Vamos lá!')
    await sleep(1)
  }

  // validação do cadastro
  if (user.status === 'awaiting_email' && !actionDone) {
    if (isValidEmail(receivedMessage)) {
      user.email = receivedMessage
      user.status = 'awaiting_phone'
      actionDone = true
    } else {
      sendMessage(chatId, 'E-mail inválido')
      await sleep(1)
    }
  }

  if (!user.email) {
    sendMessageWithButtons(chatId, 'Para continuar, informe seu email', [
      [{ text: 'Informar email', callback_data: 'email' }]
    ])
    return res.status(200).json({ ok: true })
  }

  if (user.status === 'awaiting_phone' && !actionDone) {
    if (isValidPhone(receivedMessage)) {
      user.phone = receivedMessage
      user.status = 'registered_now'
      actionDone = true
    } else {
      sendMessage(chatId, 'Telefone inválido')
      await sleep(1)
    }
  }

  if (!user.phone) {
    sendMessageWithButtons(chatId, 'Para continuar, informe seu telefone (padrão: 41999999999)', [
      [{ text: 'Informar telefone', callback_data: 'phone' }]
    ])
    return res.status(200).json({ ok: true })
  }

  // mensagem após o cadastro completo
  if (user.status === 'registered_now') {
    sendMessage(chatId, 'Você foi cadastrado com sucesso!')
    user.status = null
    await sleep(1)
    receivedMessage = '/tutorial'
  }

  // caso chegue aqui é uma mensagem de um usuário já cadastrado
  // check se a mensagem é um comando
  if (!receivedMessage.startsWith('/')) {
    sendMessage(chatId, 'Não foi identificar o comando, tente novamente ou digite /help para mais informações')
    return res.status(200).json({ ok: true })
  }

  // check se a mensagem é um comando válido
  if (!commands.includes(receivedMessage.split(' ')[0])) {
    sendMessage(chatId, 'Comando inválido, tente novamente ou digite /help para mais informações')
    return res.status(200).json({ ok: true })
  }

  if (receivedMessage.startsWith('/help')) {
    sendMessage(chatId, 'Comandos disponíveis: \n /start - inicia o bot \n /help - ajuda com os comandos \n /settings - exibe as configurações do bot \n /tutorial - exibe o tutorial do bot')
    return res.status(200).json({ ok: true })
  }

  if (receivedMessage.startsWith('/start')) {
    sendMessage(chatId, 'O bot já foi iniciado e você já está cadastrado, caso queira conferir os dados, digite /settings')
    return res.status(200).json({ ok: true })
  }

  if (receivedMessage.startsWith('/settings')) {
    sendMessage(chatId, 'Configurações do usuário: \n E-mail: ' + user.email + ' \n Telefone: ' + user.phone)
    return res.status(200).json({ ok: true })
  }

  if (receivedMessage.startsWith('/tutorial')) {
    sendMessageWithButtons(chatId, 'Acesse o link abaixo para maiores instruções', [
      [{ text: 'Documentação',  url: 'https://core.telegram.org/bots/api' }]
    ])
    return res.status(200).json({ ok: true })
  }

  res.send('OKc')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT)
})