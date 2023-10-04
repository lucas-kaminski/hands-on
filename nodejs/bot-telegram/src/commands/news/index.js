const { sendMessageWithButtons, sendMessage } = require("../../api/telegram")

const news = ({ chatId, user }) => {
  try {
    sendMessageWithButtons(chatId, "Escolha a fonte das notícias:", [
      [{
        text: "Financial Move",
        callback_data: "/news/financialNews",
      },
      {
        text: "Outros sites",
        callback_data: "/news/otherNews",
      }]
    ])
  }
  catch (error) {
    console.error(error)
  }

  return { ok: true }
}

module.exports = news
