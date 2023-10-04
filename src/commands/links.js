const { sendMessage } = require("../api/telegram")

const links = ({ chatId }) => {
  sendMessage(chatId, 'Comando a ser configurado.')
}

module.exports = links
