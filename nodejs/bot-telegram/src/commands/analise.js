const { sendMessage } = require("../api/telegram")

const analise = ({ chatId }) => {
  sendMessage(chatId, 'Comando a ser configurado.')
}

module.exports = analise
