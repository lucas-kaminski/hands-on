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