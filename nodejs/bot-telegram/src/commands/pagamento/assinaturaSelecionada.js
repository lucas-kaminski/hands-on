const { editMessageWithButtons } = require("../../api/telegram")
const { selectProductById } = require("../../database/queries")

const assinaturaSelecionada = async ({ chatId, messageId, callbackData }) => {
  const productId = callbackData

  const product = await selectProductById(productId)

  const buttons = [
    [
      {
        text: "Confirmar ✅",
        callback_data: `/pagamento/confirmar:${productId}`
      }
    ],
    [
      {
        text: "Retornar 🔙",
        callback_data: `/pagamento/cartaoBoleto`
      }
    ],
    [
      {
        text: "Cancelar ❌",
        callback_data: `/pagamento/cancelar`
      }
    ]
  ]

  editMessageWithButtons(chatId, messageId, `
  Você está adquirindo o seguinte conteúdo:

  ${product.productName}

  Período de assinatura do Grupo VIP da Financial Move
  Duração de ${parseInt(product.productValidityInDays/30)} meses

  Valor: ${parseFloat(product.productPrice).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
  Validade: ${product.productValidityInDays} dias

  Confirma a sua escolha?
  `, buttons)
}

module.exports = assinaturaSelecionada
