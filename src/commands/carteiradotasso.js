const { sendMessage } = require("../api/telegram")

const carteiradotasso = ({ chatId }) => {
  sendMessage(chatId, 'Comando a ser configurado.')
}

module.exports = carteiradotasso
