const { editMessage } = require("../../api/telegram")

const otherNews = ({ chatId, messageId }) => {
  const message = `
  📰 *NOTÍCIAS GERAIS* 📰

📰 [Deputado quer vetar justiça de acessar chave privada de criptomoedas](https://livecoins.com.br/deputado-quer-vetar-justica-de-acessar-chave-privada-de-criptomoedas/)
_Um deputado federal no Brasil quer vetar a justiça brasileira de acessar a chave privada de criptomoedas de pessoas que devam dinheiro. Dessa forma, ele pretende alterar o Código de Processo Civil e demais leis relacionadas para isso._

📰 [Duas exchanges nacionais anunciam a listagem de 16 novas criptomoedas para os usuários brasileiros](https://cointelegraph.com.br/news/new-listings-brasil-bitcoin-lists-2-new-cryptocurrencies-and-bluebenx-lists-14-new-digital-assets)
_Novas listagens: Brasil Bitcoin lista 2 novas criptomoedas e BlueBenx lista 14 novos ativos digitais_

📰 [Nona maior baleia de bitcoin do mundo compra 7.000 BTCs durante queda](https://portaldobitcoin.uol.com.br/nona-maior-baleia-de-bitcoin-do-mundo-compra-7-000-btcs-durante-queda/)
_Enquanto as sardinhas se desesperam com o preço do Bitcoin (BTC) caindo para a região dos US$ 22 mil, as baleias vão às compras. A nona maior baleia —  termo que se refere a um investidor que detém grandes quantias de criptomoedas — de bitcoin do mercado adquiriu 7._

📰 [Nexo se oferece para comprar empréstimos da Celsius em meio a suspensão de saques](https://cointelegraph.com.br/news/nexo-offers-to-buy-out-celsius-loans-amid-withdrawal-suspension)
_A plataforma Nexo poderia resgatar os clientes da Celsius após “o que parece ser a insolvência da Celsius Network”._

📰 [MicroStrategy acumula US$ 1 bilhão em perdas após queda do Bitcoin](https://livecoins.com.br/microstrategy-acumula-us-1-bilhao-em-perdas-apos-queda-do-bitcoin/)
_A MicroStrategy, empresa pública com o maior número de BTC em caixa, está com uma perda não realizada de US$ 1 bilhão (R$ 5,1 bi) devido a forte queda do Bitcoin nesta semana. Apesar disso, seu fundador e CEO, Michael Saylor, segue confiante no futuro do Bitcoin._

📰 [UFMG usará blockchain no combate de TDAH](https://livecoins.com.br/ufmg-usara-blockchain-no-combate-de-tdah/)
_A Universidade Federal de Minas Gerais (UFMG), assinou um acordo com uma empresa para pesquisar sobre como utilizar a tecnologia blockchain no diagnóstico do Tratamento de Déficit de Atenção e Hiperatividade (TDAH). Essa doença afeta pessoas por todo o mundo em sua capacidade de aprender e se concentrar em tarefas._

📰 [Binance não dará suporte a novo recurso da Litecoin (LTC)](https://livecoins.com.br/binance-nao-dara-suporte-a-novo-recurso-da-litecoin-ltc/)
_A Binance, exchange de criptomoedas fundada por Changpeng Zhao, anunciou nesta segunda-feira (13) que não trabalhará com depósitos e saques de Litecoin (LTC) que usarem o recurso MimbleWimble Extension Blocks (MWEB)._

📰 [Corretora Crypto.com demite 260 funcionários devido à crise no mercado de criptomoedas](https://portaldobitcoin.uol.com.br/corretora-crypto-com-demite-260-funcionarios-devido-a-crise-no-mercado-de-criptomoedas/)
_A Crypto.com irá demitir 260 pessoas, cerca de 5% de seus funcionários corporativos, à medida que os mercados continuam caindo, de acordo o CEO da empresa, Kris Marszalek._

📰 [Brasil em NFT: Game 'Heroes of Metaverse' levanta R$ 14 milhões, Reserva distribui NFTs de graça, e Livia Elektra ajuda mulheres a entrar no mercado](https://cointelegraph.com.br/news/brazil-in-nft-game-heroes-of-metaverse-raises-r-14-million-reserva-distributes-nfts-for-free-and-le-helps-women-enter-the-market)
_Apesar da queda do mercado de criptomoedas, mercado de NFTs brasileiro não para e novos projetos vêm sendo desenvolvidos._

📰 [Edward Snowden defende criptomoedas em pagamentos e diz que críticos deveriam entender melhor a indústria cripto](https://cointelegraph.com.br/news/edward-snowden-defends-cryptocurrencies-as-a-form-of-payment-and-reveals-anonymous-use-of-bitcoin-to-pay-for-web-hosting)
_Denunciante estadunidense exilado na Rússia usou a criptomoeda para custear servidores que vazaram documentos da NSA._
  `
  editMessage(chatId, messageId, message)
  return { ok: true }
}

module.exports = otherNews