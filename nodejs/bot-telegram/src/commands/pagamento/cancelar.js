const { deleteMessage } = require("../../api/telegram")

const cancelar = ({ chatId, messageId}) => {
  deleteMessage(chatId, messageId)
}

module.exports = cancelar
