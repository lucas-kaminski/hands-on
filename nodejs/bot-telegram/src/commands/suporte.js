const { sendMessage } = require("../api/telegram")

const suporte = ({ chatId }) => {
  sendMessage(chatId, 'Comando a ser configurado.')
}

module.exports = suporte
