const express = require('express')
const { v4:uuidv4 } = require('uuid')

const app = express()
app.listen(3333)
app.use(express.json())

const customers = []

//Middleware -> precisa três parâmetros, request, response e next
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.headers 
  
  const customer = customers.find(customer => customer.cpf === cpf)
  
  if(!customer) {
    return response.status(400).json({error: "Customer not found"})
  }

  request.customer = customer //para passar para frente, via request

  return next()
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if(operation.type === 'credit') {
      return acc + operation.amount
    } else {
      return acc - operation.amount
    }
  }, 0)

  return balance
}

//cpf, name -> necessitado no body
//id, statement (extrato) -> já tem no server
app.post("/account", (request, response) => {
  const {cpf, name} = request.body

  const customerAlreadyExists = customers.some(customer => customer.cpf === cpf) //boolean
  if (customerAlreadyExists) {
    return response.status(400).json({error: "Customer already exists!"})
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  })

  return response.status(201).json(customers)
})

//Middleware pode ser posto tanto no metodo quando no use
// app.use(verifyIfExistsAccountCPF)
// todos metodos abaixo irão testar tal valor

// app.get("/statement/:cpf", (request, response) => { //por params
// const { cpf } = request.params
// a estrutura é mesma, só muda o cpf por header ou params
app.get("/statement/", verifyIfExistsAccountCPF, (request, response) => { //por headers
  const {customer} = request //pega o customer desestrutuado do verify
  return response.json(customer.statement)
})

app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
  const { description, amount } = request.body
  const { customer } = request
  const statementOperation = {
    description,
    amount,
    type: "credit",
    created_at: new Date(),
  }
  customer.statement.push(statementOperation)
  return response.status(201).json(customers)
})

app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body
  const { customer } = request
  const balance = getBalance(customer.statement)

  if(balance < amount) {
    return response.status(400).json({error: "Insufficient funds!"})
  }
  const statementOperation = {
    description: "",
    amount,
    type: "debit",
    created_at: new Date(),
  }
  customer.statement.push(statementOperation)
  return response.status(201).json(customers)
})

app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request
  const { date } = request.query

  const dateFormat = new Date(date + " 00:00") //2021-06-24 aaaa-mm-dd

  const statement = customer.statement.filter(
    (statement) => statement.created_at.toDateString() === 
    new Date (dateFormat).toDateString()
    )
  
    // if (!statement) {

    // }
  
  return response.json(statement)
})

app.put("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body
  const { customer } = request 

  customer.name = name

  return response.status(201).json(customer)
})

app.get("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request
  return response.json(customer)
})

app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request
  customers.splice(customer, 1)
  return response.status(200).json(customers)
})

app.get("/balance", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request
  const balance = getBalance(customer.statement)
  return response.json(balance)
})