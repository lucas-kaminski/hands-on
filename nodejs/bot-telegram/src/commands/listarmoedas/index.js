const { sendMessage } = require("../../api/telegram")
const axios = require("axios")

const url = 'https://api-testnet.bybit.com/v2/public/tickers'

const { moedasInserted } = require('./insert')

const listarmoedas = async ({ chatId }) => {
  const response = await axios.get(url)
  const moedasRequest = response.data.result.sort((a, b) => (b.last_price - a.last_price)).slice(0, 5)

  const header = 'Lista de moedas'

  const moedas = moedasRequest.concat(moedasInserted)

  const body = moedas.map(moeda => `${moeda.symbol} - ${moeda.last_price}`).join('\n')

  sendMessage(chatId, `${header}\n${body}`)
}

module.exports = listarmoedas
