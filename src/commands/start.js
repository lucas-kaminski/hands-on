const { sendMessage } = require('../api/telegram')

const start = ({ chatId }) => {
  sendMessage(chatId,
    `
    O bot já foi iniciado e você já está cadastrado, caso queira conferir os dados, digite /settings
    `
  )
}

module.exports = start