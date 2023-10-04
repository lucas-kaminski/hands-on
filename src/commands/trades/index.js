const { sendMessage } = require("../../api/telegram")

const trade = ({ chatId }) => {
  sendMessage(chatId, 'Comando a ser configurado.')
}

module.exports = trade
