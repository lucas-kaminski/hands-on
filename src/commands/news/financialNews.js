const { editMessageWithButtons } = require("../../api/telegram")

const financialNews = ({ chatId, messageId }) => {
  editMessageWithButtons(chatId, messageId, "Clique no botão abaixo para ler as notícias e artigos mais recentes no site da Financial Move.", [
    {
      text: "Abrir site",
      url: "https://www.financialmove.com.br"
    }]
  )
  return { ok: true }
}

module.exports = financialNews