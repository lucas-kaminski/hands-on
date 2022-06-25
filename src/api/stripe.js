require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.createCustomer = async (user) => {
  const operation = await stripe.customers.create({
    name: user.fromName,
    email: user.email,
    phone: user.phone,
    metadata: {
      userId: user.fromId
    }
  })
  return operation
}

module.exports.selectCustomerByMetadataId = async (userId) => {
  const operation = await stripe.customers.list({
    limit: 1,
    metadata: {
      userId: userId
    }
  })
  return operation.data[0]
}

module.exports.selectCustomerById = async (customerId) => {
  const operation = await stripe.customers.retrieve(customerId)
  return operation
}

module.exports.createSession = async (customerId, priceId) => {
  const operation = await stripe.checkout.sessions.create({
    success_url: `https://${process.env.DOMAIN}/pagamento/sucesso`,
    cancel_url: `https://${process.env.DOMAIN}/pagamento/cancelar`,
    customer: customerId,
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })
  return operation
}

module.exports.selectProductByMetadataId = async (productId) => {
  const operation = await stripe.products.search({
    limit: 1,
    query: 'metadata[\'productId\']:"' + productId + '"'
  })
  return operation.data[0]
}

module.exports.selectSubscriptionById = async (subscriptionId) => {
  const operation = await stripe.subscriptions.retrieve(subscriptionId)
  return operation
}




