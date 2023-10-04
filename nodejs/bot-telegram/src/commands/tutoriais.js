const { sendMessage, sendMessageWithButtons } = require('../api/telegram')
const {sleep} = require('../utils/functions')

const tutorial = async ({ chatId }) => {
  sendMessageWithButtons(chatId,
    'Aqui no Bot é onde você acessa os trades do Tasso em tempo real' + '\n\n' +
    'Segue o passo a passo pra você entender como funciona para acessar o melhor do VIP (Vídeo no botão abaixo)',
    [[{ text: '📺 Instruções para acessar', url: 'https://financialmove.com.br/como-acessar' }]]
  )

  await sleep(1)

  sendMessageWithButtons(chatId,
    '➡ Passo 1:' + '\n' +
    'Clique no botão abaixo para ver os tutoriais e entender como funcionam as informações do Bot',
    [[{ text: '📺 Ver tutorial do bot', url: 'https://financialmove.com.br/tutoriais-bot' }]]
  )

  await sleep(1)

  sendMessage(chatId,
    '➡ Passo 2:' + '\n' +
    'Digite o comando  /links' + '\n' +
    'Com esse comando você acessa o CANAL VIP e a ÁREA VIP' + '\n' +
    '- No CANAL VIP você tem acesso à conversa onde o Tasso conta em detalhes os bastidores de toda sua estratégia' + '\n' +
    '- Na ÁREA VIP você acessa os cursos e conteúdos *BÔNUS* da assinatura do VIP' + '\n' +
    '(Ambos são exclusivos para assinantes do VIP)'
  )

  await sleep(1)

  sendMessage(chatId,
    '➡ Passo 3:' + '\n' +
    'Digite o comando /trades' + '\n' +
    'Com esse comand você acessa todos os trades disponíveis no momento' + '\n' +
    'Lembrando que operamos SWING TRADE, ou seja, não abrimos trades todos os dias, ok?' + '\n' +
    'Se você ainda é um usuário Gratuito do Bot, pode aguardar algum trade gratuito ou assinar o VIP para liberar todos os trades na hora'
  )

  await sleep(1)

  sendMessage(chatId,
    '➡ Passo 4:' + '\n' +
    'Digite o comando /pagamento' + '\n' +
    'Com esse comando você acessa a área de pagamento' + '\n' +
    'Na área de pagamento você pode fazer sua assinatura ou mudar de plano de forma fácil e automática'
  )

  await sleep(1)

  sendMessageWithButtons(chatId,
    'E por fim, você pode usar o comando /help para descobrir todos os comandos do bot!' + '\n\n' +
    'Um abraço do Tasso e de toda a equipe da Financial!' + '\n\n' +
    'Somos a #revolução Cripto 📈',
    [[{ text: '📳 Falar com o suporte', url: 'https://financialmove.com.br/andreimeajuda' }]]
  )

  return true
}

module.exports = tutorial
