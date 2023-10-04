const { asyncMiddleware } = require("middleware-async")
const { sendMessage, sendMessageWithButtons } = require("../api/telegram")
const { selectUserByFromId, insertUser, updateUser, insertChannel, selectChannelById } = require("../database/queries")
const { isValidEmail, isValidPhone } = require("../utils/validation")
const { sleep } = require("../utils/functions")

// Middleware para validar o tipo da mensagem enviado pelo Update do Telegram, cada tipo de mensagem tem um comportamento diferente
// Caso seja mensagem direta, irá fazer a validação do cadastro do usuário e passar caso esteja conforme o esperado
// Caso seja mensagem de canal, irá fazer a validação e se preciso o cadastro do canal somente
const messageValidation = async (req, res, next) => {
  // Mensagem de chat direto com o bot
  if (req.body.message && !req.body.callback_query) {
    const chatId = req.body.message.chat.id
    let receivedMessage = req.body.message.text
    const fromId = req.body.message.from.id
    const fromName = req.body.message.from.first_name + (req.body.message.from.last_name ? ' ' + req.body.message.from.last_name : '')
    let actionDone = false

    // verifica se já existe um usuário com o id do chat recebido
    let user = await selectUserByFromId(fromId)

    // se o select retornar null, o usuário não existe no banco de dados e será inserido com o status para aguadar o e-mail
    if (!user) {
      try {
        user = await insertUser(fromId, fromName, 'awaiting_email')
        actionDone = true
      } catch (error) {
        return res.status(500).json({
          error: 'Erro ao cadastrar usuário',
          fault: error
        })
      }
    }

    // mensagem caso seja um novo usuário, ou seja, tenha sido cadastrado no bloco acima
    if (actionDone) {
      sendMessage(chatId, 'Olá, ' + fromName + '! \n \n Seja muito bem vindo ao nosso bot! \n \n Identificamos que você não possui um cadastro no nosso sistema.')
      await sleep(1)
    }

    // validação do cadastro de e-mail, caso o status do user seja aguardando e-mail e a mensagem seja um e-mail, valida abaixo, caso não, envia mensagem pedindo e-mail e acaba a requisição
    if ((user.status === 'awaiting_email' && !actionDone ) || user.status === `updating_email`) {
      if (isValidEmail(receivedMessage)) {
        try {
          user = await updateUser({ fromId, email: receivedMessage, status: user.status === 'awaiting_email' ? 'awaiting_phone' : 'updated_now' })
          actionDone = true
          sendMessage(chatId, 'E-mail cadastrado com sucesso!')
          await sleep(1)
        } catch (error) {
          return res.status(500).json({
            error: 'Erro ao atualizar o e-mail do usuário',
            fault: error
          })
        }
      } else {
        sendMessage(chatId, 'O e-mail que você nos enviou é inválido.')
        await sleep(1)
      }
    }

    if (!user.email || user.status === 'awaiting_email' || user.status === `updating_email`) {
      sendMessageWithButtons(chatId, 'Para continuar, informe seu email', [
        [{ text: '📩 Cadastrar email', callback_data: 'email' }]
      ])
      return res.status(200).json({ ok: true })
    }

    // validação do cadastro de telefone, caso o status do user seja aguardando telefone e a mensagem seja um telefone, valida abaixo, caso não, envia mensagem pedindo telefone e acaba a requisição
    if ((user.status === 'awaiting_phone' && !actionDone ) || user.status === 'updating_phone') {
      if (isValidPhone(receivedMessage)) {
        try {
          user = await updateUser({ fromId, phone: receivedMessage, status: user.status === 'awaiting_phone' ? 'registered_now' : 'updated_now' })
          actionDone = true
          sendMessage(chatId, 'Telefone cadastrado com sucesso!')
          await sleep(1)
        } catch (error) {
          return res.status(500).json({
            error: 'Erro ao atualizar o telefone do usuário',
            fault: error
          })
        }
      } else {
        sendMessage(chatId, 'O telefone que você nos enviou é inválido. O padrão que esperamos é o número com DDD. (041999999999)')
        await sleep(1)
      }
    }

    if (!user.phone || user.status === 'awaiting_phone' || user.status === `updating_phone`) {
      sendMessageWithButtons(chatId, 'Para continuar, informe seu telefone', [
        [{ text: '📞 Cadastrar telefone', callback_data: 'phone' }]
      ])
      return res.status(200).json({ ok: true })
    }

    // mensagem após cadastrado completo, só é ativado quando o usuário cadastrou o telefone pela primeira vez e define finaliza a requisição enviando os dados do /tutorial
    if (user.status === 'registered_now') {
      try {
        user = await updateUser({ fromId, status: 'completed' })
        receivedMessage = '/tutoriais'
        sendMessage(chatId, 'O seu cadastro foi concluído! \n \n Muito bem vindo ao nosso bot! \n \n Para começar, enviaremos algumas informações de como utilizar o bot.')
        await sleep(1)
      } catch (error) {
        return res.status(500).json({
          error: 'Erro ao atualizar o status para cadastro completo do usuário',
          fault: error
        })
      }
    }

    if (user.status === 'updated_now') {
      updateUser({ fromId, status: 'completed' })
      return res.status(200).json({ ok: true })
    }

    // transmitindo as informações para serem utilizados nos comandos do bot
    req.body.messageType = 'message'
    req.body.receivedMessage = receivedMessage
    req.body.messageId = req.body.message.message_id
    req.body.chatId = chatId
    req.body.user = user

    next()
  } else if (req.body.channel_post) {

    // mensagem recebida por um canal
    const chatId = req.body.channel_post.chat.id
    const chatName = req.body.channel_post.chat.title

    // verifica se já existe um canal com o id do chat recebido
    const channel = await selectChannelById(chatId)

    // se o select retornar null, o canal não existe no banco de dados e será inserido
    if (!channel) {
      try {
        await insertChannel(chatId, chatName)
      } catch (error) {
        return res.status(500).json({
          error: 'Erro ao cadastrar canal',
          fault: error
        })
      }
    }

    req.body.messageType = 'channel'

    // finaliza a requisição por não ter comando com mensagem em canal (pode ser alterado para next() caso seja necessário)
    // next()
    return res.status(200).json({ ok: true })
  } else if (req.body.callback_query) {
    const chatId = req.body.callback_query.message.chat.id
    let user = await selectUserByFromId(chatId)
    if (!user) {
      // TODO: APAGAR LINHA ABAIXO QND VALIDAR
      sendMessage('001 - Erro de callback')
      return res.status(500).json({
        error: 'Callback está sem usuário atrelado',
        fault: undefined
      })
    }

    req.body.messageType = 'callback'
    req.body.receivedMessage = req.body.callback_query.data
    req.body.chatId = req.body.callback_query.message.chat.id
    req.body.messageId = req.body.callback_query.message.message_id
    req.body.user = user

    next()
  }
}

module.exports = asyncMiddleware(messageValidation)