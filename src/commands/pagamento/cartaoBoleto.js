const { editMessageWithButtons } = require("../../api/telegram")
const { selectAllProducts } = require("../../database/queries")

const cartaoBoleto = async ({ chatId, messageId, callbackData }) => {
  const buttons = []

  const products = await selectAllProducts()

  products.forEach(product => {
    buttons.push([
      {
        text: `${product.productName} - ${parseFloat(product.productPrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`,
        callback_data: `/pagamento/assinaturaSelecionada:${product.productId}`
      }
    ])
  })

  editMessageWithButtons(chatId, messageId, `
  Selecione uma das opções de assinatura abaixo:
  `, buttons)

}

module.exports = cartaoBoleto
