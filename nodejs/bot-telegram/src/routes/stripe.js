var express = require('express')
require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { addMonths } = require('date-fns')

const { selectUserByStripeCustomerId, selectVipUserById, registrateUserAsVip, updateUserVip, updateUser } = require('../database/queries')
const { selectSubscriptionById } = require('../api/stripe')

const router = express.Router()

router.post('/webhook', async (req, res) => {

  const sig = req.headers['stripe-signature'];
  const webhookSecret = 'whsec_1kf2jqnAsBpKoWEtIyNdi9tBxHnigaTa'
  let event;

  // Validação do webhook por parte da stripe
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    console.log('err')
    return res.status(400).send(`Error stripe webhook: ${err.message}`);
  }

  /*
    Definição das lógicas baseado no type do evento
    checkout.session.completed -> Usuário fez o pedido pelo /pagamento e realizou o pagamento via cartão com sucesso
    checkout.session.async_payment_succeeded -> Usuário fez o pedido pelo /pagamento e realizou o pagamento com boleto, esperando retorno do pagamento
    invoice.paid -> Usuário pagou a recorrência do plano (pagou a fatura do mês do 2, por exemplo)
  */
  switch (event.type) {
    case 'customer.created':
      console.log('customer.created')
      const customer = event.data.object;
      await updateUser({ fromId: customer.metadata.userId, stripeCustomerId: customer.id, })
      return res.status(200).send('Customer created')
    case 'customer.deleted':
      console.log('customer.deleted')
      const customerDeleted = event.data.object;
      await updateUser({ fromId: customerDeleted.metadata.userId, stripeCustomerId: null, })
      return res.status(200).send('Customer deleted')
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded':
      console.log('checkout.session.completed ou checkout.session.async_payment_succeeded')
      const session = event.data.object;
      const userSession = await selectSessionByStripeCustomerId(session.customer)
      const vipUserSession = await selectVipUserById(userSession.fromId)
      const subscriptionSession = await selectSubscriptionById(session.subscription)

      // Adiciona os meses definido no produto a partir do dia de cadastro
      const expirationDateOfVipSession = addMonths(new Date(), subscriptionSession.plan.interval_count)

      if (!vipUserSession) {
        await registrateUserAsVip(userSession.fromId, subscriptionSession.plan.product, expirationDateOfVipSession, 'awaiting_payment')
        console.log('Usuário registrado como VIP awaiting_payment')
      }

      if (session.payment_status === 'paid') {
        await updateUserVip({ userId: userSession.fromId, status: 'active' })
        console.log('Usuário atualizado como VIP active')
      }

      return res.status(200).json({ message: 'Cadastro do usuário para VIP completado' })
    case 'invoice.paid':
      console.log('invoice.paid')
      const invoice = event.data.object;
      console.log('invoice ', invoice)
      const userInvoice = await selectUserByStripeCustomerId(invoice.customer)
      console.log('userInvoice ', userInvoice)
      const vipUserInvoice = await selectVipUserById(userInvoice.fromId)
      console.log('vipUserInvoice ', vipUserInvoice)
      const subscriptionInvoice = await selectSubscriptionById(invoice.subscription)
      console.log('subscriptionInvoice ', subscriptionInvoice)
      const expirationDateInvoice = addMonths(new Date(vipUserInvoice.expirationDate), subscriptionInvoice.plan.interval_count)
      console.log('expirationDate ', expirationDateInvoice)
      await updateUserVip({ userId: userInvoice.fromId, productId: subscription.plan.product, expirationDateInvoice, status: 'active' })
      return res.status(200).json({ message: 'Atualização do usuário para VIP' })
    case 'customer.subscription.deleted':
      console.log('customer.subscription.deleted')
      const subscriptionDeleted = event.data.object;
      const userSubscriptionDeleted = await selectUserByStripeCustomerId(subscriptionDeleted.customer)
      await updateUserVip({ userId: userSubscriptionDeleted.fromId, status: 'canceled' })
      return res.status(200).json({ message: 'Cancelamento do usuário para VIP' })
    default:
      console.log('Evento não reconhecido: ' + event.type)
      return res.status(200).send('Event not supported')
  }
})

module.exports = router