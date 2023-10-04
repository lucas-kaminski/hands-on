## Primeira task:

- [x] criar bot no node

- [x] usar webhook para captar as mensagens enviadas pra esse bot (query no Insomnia)

- [x] verificar no webhook.site se estão chegando as notificações (print WEBHOOK.png)

- [x] heroku para hospedar sua aplicação (https://secure-fortress-69045.herokuapp.com/)

## Segunda task:
- [ ] Reproduzir o fluxo do https://t.me/Cryptointeliggencebot
- [x] Settar a imagem como icon do bot (https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/01/amecaroboengineeredarts-2.jpg)

<br/>

## Tutoriais:

Fiz até a parte da configuração do post no express

https://codingwithmanny.medium.com/building-a-telegram-bot-with-nodejs-46660f05b42f

Realizei o deploy do bot no heroku

https://devcenter.heroku.com/articles/deploying-nodejs

<br/>

## Dúvidas:

Definindo as variáveis de ambiente no heroku

https://stackoverflow.com/questions/42109813/node-js-environment-variables-and-heroku-deployment

O bot usado na empresa é hospedagem local ou do Telegram



<br/>

## Save for later:

Link do bot

https://t.me/WTLLBot

Documentação do bot no telegram

https://core.telegram.org/bots/api

https://core.telegram.org/bots/#inline-keyboards-and-on-the-fly-updating



Propagar o commit pro heroku

`git push heroku HEAD:master`

Log do deploy

`heroku logs --tail`

## Processo na Stripe

Os produtos estão no banco e são sync na stripe com o rota do config (https://stripe.com/docs/products-prices/how-products-and-prices-work)

Para cada produto vai ter um preço relacionado diretamente (https://stripe.com/docs/products-prices/manage-prices?dashboard-or-api=api)

// TODO: ver se salva o price no banco tbm

Quando o usuário vai no bot /pagamento, no cartão ou boleto, ao confirmar

- Vai criar o usuário na Stripe e atualizar o id dele no banco

- Devido a recorrência do produto, é criado uma subscription (https://stripe.com/docs/billing/subscriptions/overview)

- Cria uma session de checkout pro cliente

Caso o cliente pague com boleto, o webhook vai mandar um `checkout.session.completed` e vai ser registrado como VIP aguardando pagamento, quando receber o pagamento, vai enviar um `checkout.session.async_payment_succeeded` e vai ser registrado como VIP concluído

Caso o cliente pague com cartão, o webhook vai mandar um `checkout.session.completed` e vai ser registrado como VIP concluído

No pagamento da próxima fatura, exemplo no mes seguinte caso VIP MENSAL, o webhook vai enviar um `invoice.paid` e vai ser atualizado o cadastro VIP

Caso o usuário cancele
