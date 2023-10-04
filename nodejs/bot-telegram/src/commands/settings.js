const { sendMessage } = require('../api/telegram')

const settings = ({ chatId, user }) => {
  sendMessage(chatId,
    `
    Configurações do usuário: \n
    E-mail: ${user.email} \n
    Telefone: ${user.phone}
    `
  )
}

module.exports = settings