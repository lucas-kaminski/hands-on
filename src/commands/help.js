const { sendMessage } = require('../api/telegram')

const help = ({ chatId }) => {
  sendMessage(chatId,
  `
  Comandos disponíveis: \n
  /start - inicia o bot \n
  /help - ajuda com os comandos \n
  /settings - exibe as configurações do bot \n
  /tutorial - exibe o tutorial do bot
  `
  )
}

module.exports = help