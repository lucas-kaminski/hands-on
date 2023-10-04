const { editMessage } = require("../../api/telegram")
const { updateUser } = require("../../database/queries")

const atualizarEmail = async ({ chatId, messageId }) => {
  await updateUser({ fromId: chatId, status: "updating_email" })
  editMessage(chatId, messageId, 'Por favor, informe o seu e-mail:')
}

module.exports = atualizarEmail
