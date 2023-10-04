const { editMessageWithButtons } = require("../../api/telegram")
const { selectCustomerByMetadataId, createCustomer, createSession, selectProductByMetadataId } = require("../../api/stripe")
const { updateUser } = require("../../database/queries")


const confirmar = async ({ chatId, user, messageId, callbackData }) => {
  const productId = callbackData

  // Na stripe tem que informar o preço da session, o produto está atrelado direto por ser um pra um
  const price = (await selectProductByMetadataId(productId)).default_price

  // Verifica se já existe o cliente na Stripe
  let customer = await selectCustomerByMetadataId(user.id)

  // Se não existir, cria o cliente e salva o id no banco de dados de usuário
  // Vai triggar o webhook da stripe de `customer.created` e lá é feito o update do id usuário
  if (!customer) {
    customer = await createCustomer(user)
  }

  // Cria a sessão de checkout
  const session = await createSession(customer.id, price)

  const message = `Para confirmar o pagamento, acesse o link abaixo: `
  const url = session.url

  const buttons = [
    [{ text: 'Efetuar pagamento', url }]
  ]

  editMessageWithButtons(chatId, messageId, message, buttons)
}

module.exports = confirmar
