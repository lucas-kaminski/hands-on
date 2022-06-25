const { sendMessageWithButtons } = require("../../api/telegram")

const pagamento = ({ chatId, user }) => {
  const buttons = [
    [
      {
        text: "Continuar com cartão ou boleto",
        callback_data: "/pagamento/cartaoBoleto"
      }
    ],
    [
      {
        text: "Continuar com pix ou cripto",
        url: "https://financialmove.com.br/CrisMeAjuda"
      },
    ],
    [
      {
        text: "Atualizar e-mail",
        callback_data: "/pagamento/atualizarEmail"
      }
    ]
  ]

  sendMessageWithButtons(chatId, `
Estou aqui para facilitar o pagamento referente aos serviços prestados pela Financial Move
Por aqui aceitamos pagamento por cartão de crédito, mas também trabalhamos com Pix, Criptos e Boleto...
Nós não temos e nem desejamos nenhum acesso referente ao seu cartão de crédito..ok?

Certifique-se de utilizar o mesmo email cadastrado no bot (${user.email}) para fazer os pagamentos.
  `,buttons)
}

module.exports = pagamento
