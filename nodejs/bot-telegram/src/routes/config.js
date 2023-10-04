require('dotenv').config()

const express = require('express')
const axios = require('axios')

const commandsInJsonFormat = require('../json/config/commands.json')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const { selectAllProducts, updateProductId } = require('../database/queries')
const { selectProductByMetadataId } = require('../api/stripe')


const router = express.Router()


// Rota para definir os comandos dos bots, configuração presente no arquivo commands.json
// TODO: Melhorar o conceito desta rota, trazer um middleware de autenticação de admin?
router.post('/commands', async (_, res) => {
  const request = await axios.post('https://api.telegram.org/bot' + process.env.TOKEN + '/setMyCommands', commandsInJsonFormat)
  return res.json({ info: 'Comandos configurados a partir do JSON no servidor.', data: request.data })
})

router.post('/webhooks', async (req, res) => {
  await axios.post('https://api.telegram.org/bot' + process.env.TOKEN + '/setWebhook', {
    url: req.body.url + '/telegram',
    drop_pending_updates: true
  })

  return

  // // Limpa todos os webhooks
  // await stripe.webhookEndpoints.list({ limit: 100 }).then(async (endpoints) => {
  //   for (let i = 0; i < endpoints.data.length; i++) {
  //     await stripe.webhookEndpoints.del(endpoints.data[i].id)
  //   }
  // })

  // // Cria um webhook para o endpoint informado
  // const endpoint = await stripe.webhookEndpoints.create({
  //   url: req.body.url + '/stripe/webhook',
  //   enabled_events: ['*']
  // })

  // return res.json({ info: 'Webhooks configurados, configurar no .env o STRIPE_WEBHOOK_SECRET_KEY', data: endpoint.secret })
})

// TODO: Desabilitar os produtos não disponíveis para o cliente
router.post('/stripe/sync/products', async (req, res) => {
  const productsDatabase = await selectAllProducts()
  const productsStripe = await stripe.products.list()

  // Array of products from database
  const newProducts = []
  const olderProducts = []

  productsDatabase.filter(product => {
    !productsStripe.data.find(p => parseInt(p.metadata.productId) === product.productId || p.id === product.productId) ? newProducts.push(product) : olderProducts.push(product)
  })

  newProducts.forEach(async product => {
    const newProduct = await stripe.products.create({
      // id: automatic by stripe
      name: product.productName,
      active: true,
      description: product.productDescription !== '' ? product.productDescription : undefined,
      metadata: {
        productId: product.productId
      },
      default_price_data: {
        currency: 'brl',
        unit_amount_decimal: product.productPrice.toFixed(2).toString().replace('.', ''),
        recurring: {
          interval: 'month',
          interval_count: parseInt(product.productValidityInDays / 30),
        },
      },
    })

    await updateProductId(product.productId, newProduct.id)
  })

  olderProducts.forEach(async product => {
    const olderProduct = await selectProductByMetadataId(product.productId)
    await updateProductId(product.productId, olderProduct.id)
  })

  return res.json({ info: 'Produtos sincronizados com sucesso.' })
})

module.exports = router