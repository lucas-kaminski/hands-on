from flask import Flask, request
import telegram
from config import TELEGRAM_ACCESS_TOKEN, SERVER_URL

app = Flask(__name__)
bot = telegram.Bot(token=TELEGRAM_ACCESS_TOKEN)

def setWebhook():
    bot.setWebhook(SERVER_URL + '/bot' + TELEGRAM_ACCESS_TOKEN)

@app.route("/bot{}".format(TELEGRAM_ACCESS_TOKEN), methods=["POST"])
def webhook():
    update = telegram.Update.de_json(request.get_json(force=True), bot)

    chat_id = update.message.chat.id
    msg_id = update.message.message_id

    text = update.message.text.encode("utf-8").decode()
    # print("got text message :", text)

    message = ''
    if text == "/start":
        message = "Olá, eu sou o bot da Fama Assessorias.\n\n"
        message += "Aqui você irá encontrar informações sobre o nosso escritório, os serviços que oferecemos e os nossos contatos.\n"
        message += "Para saber mais sobre mim, digite /help"
    elif text == "/help":
        message = "Os comando disponíveis são:\n"
        message += "/start - Inicia o bot\n"
        message += "/help - Exibe os comandos disponíveis\n"
        message += "/sobre - Exibe informações sobre o bot\n"
        message += "/atendimento - Exibe informações de contato\n"
        message += "/impostoderenda - Exibe informações sobre o que é o imposto de renda\n"
        message += "/simplesnacional - Exibe informações sobre o Simples Nacional\n"
    elif text == "/sobre":
        message = "Somos um escritório de contabilidade e assessoria, que atua no mercado desde 1998.\n"
        message += "Nosso escritório está localizado em Almirante Tamandaré, no bairro Santa Maria. \n"
        message += "Trabalhamos com empresas de todos os portes e atuamos em todo o Brasil.\n"
        message += "Fornecemos serviços de contabilidade, assessoria, fiscal, departamento pessoal, RH, gestão de pessoas e muito mais.\n"
        message += "Caso queira entrar em contato, os nossos números são: \n\n"
        message += "(41) 3039-8986 - Telefone de atendimento de todos os setores\n"
        message += "(41) 9 9811-9798 - Contato Whatsapp do setor contabilidade e assessorias\n"
        message += "(41) 9 9811-9091 - Contato Whatsapp do setor departamento pessoal e RH\n"
        message += "(41) 9 9811-9988 - Contato Whatsapp do setor fiscal\n"
    elif text == "/atendimento":
        message = "Para conversar com a gente, é só entrar no seguinte link: \n\n"
        message += "https://api.whatsapp.com/send?phone=554130398986"
    elif text == "/impostoderenda":
        message = "O Imposto de Renda, também conhecido atualmente como o leão, se trata de um tributo federal sobre a renda (o quanto você ganha) e acompanha a sua evolução patrimonial. Todos os anos o Governo exige que trabalhadores do Brasil inteiro façam a declaração dos ganhos anuais para a Receita Federal.\n"
        message += "Após feita a declaração, ela passa por um processo de análise para saber se todos os dados estão de acordo com as cobranças e pagamentos feitos (é de extrema importância que cada centavo declarado seja correspondente aos valores dos comprovantes de renda e pagamentos). Além disso, o Imposto de Renda é uma contribuição compulsória.\n\n"
        message += "Nós da Fama Assessorias, estamos certos de que você irá ganhar um imposto de renda apropriado.\n"
        message += "Para saber mais sobre ou fazer o seu cálculo, entre em contato com no link abaixo:\n\n"
        message += "https://api.whatsapp.com/send?phone=5541998119798"
    elif text == "/simplesnacional":
        message = "Todo empreendedor precisa escolher um regime tributário na hora de abrir empresa. Essa escolha vai refletir em diversas questões, como os impostos que serão pagos, a forma de cálculo dos tributos e até algumas regras gerais, como limite de faturamento e porte da empresa. \n"
        message += "No Brasil, existem três opções de regimes tributários: o Simples Nacional, o Lucro Presumido e o Lucro Real, cada um com suas regras e particularidades, que falaremos melhor no decorrer do texto.\n"
        message += "O Simples Nacional é um regime tributário criado em 2006 pela Lei Complementar 123, voltado para as micro e pequenas empresas — incluindo os microempreendedores individuais (MEIs). Ele surgiu com o objetivo de reduzir a burocracia e os custos de pequenos empresários, criando um sistema unificado de recolhimento de tributos, simplificando declarações, entre outras facilidades.\n\n"
        message += "Nós da Fama Assessorias, estamos certos de que você irá ter na sua empresa a melhor opção de regime tributário.\n"
        message += "Para saber mais sobre ou saber qual o melhor encaixe, entre em contato com no link abaixo:\n\n"
        message += "https://api.whatsapp.com/send?phone=55419981199091"
    else:
        message = "Não entendi o que você disse.\n"
        message += "Para saber mais sobre mim, digite /help"

    bot.sendMessage(chat_id=chat_id, text=message, reply_to_message_id=msg_id)
    return "ok"

if __name__ == '__main__':
  setWebhook()
  app.run(threaded=True)
