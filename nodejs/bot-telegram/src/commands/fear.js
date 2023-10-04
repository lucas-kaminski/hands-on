const { sendMessage } = require("../api/telegram")

const fear = ({ chatId }) => {
  sendMessage(chatId, 'Comando a ser configurado.')
}

module.exports = fear
