import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

import { IUser } from '../types/@types'

const app = express()
app.listen(3333)
app.use(express.json())

//Users function
const usersDB = require('../database/users.json')
const users:IUser[] = usersDB

//middlewares
//fix any, need extends express.Request for could pass props for request
function checkAuthentication(request, response, next) {
  const { cpf } = request.headers

  const user:IUser = users.find(user => user.cpf === cpf )
  
  if (!user) {
    return response.status(400).json({error: "Usuário não encontrado"})
  }

  request.user = user  
  return next()
}

//users
app.get("/users/", checkAuthentication, (request, response) => {
  return response.status(200).json(users)
})

//user 
app.post("/user", (request, response,) => {
  const { nome, cpf, email, telefone, endereco, cidade }:IUser = request.body

  if (!nome || !cpf || !email || !telefone || !endereco || !cidade ) {
    return response.status(400).json('Dados faltando')
  }

  const userExists = users.find(user => user.cpf === cpf) //pode ser um middleware
  if (userExists) {
    return response.status(400).json({error: "CPF já cadastrado"})
  }

  const user:IUser = {
    id: uuidv4(),
    nome, 
    cpf,
    email,
    telefone,
    endereco,
    cidade
  }
  
  users.push(user)
  
  fs.writeFile ("./database/users.json", JSON.stringify(users), err => {
    if (err) throw err;
    }
  )
  
  return response.status(200).json('Criado com sucesso!')
})

app.get("/user/:cpf", checkAuthentication, (request, response) => {
  const { cpf } = request.params
  const user = users.find(user => user.cpf === cpf)
  return response.status(200).json(user)
})

app.patch("/user", checkAuthentication, (request, response) => {
  const body:any = request.body
  let { user } = request

  for (var i = 0; i < Object.keys(body).length; i++) {
    const check = Object.keys(user).includes(Object.keys(body)[i])
    if(!check) {
      return response.status(400).json({error:`${Object.keys(body)[i]} não existe nos atributos do usuário`})
    }
  }

  for (var _i = 0; _i < Object.keys(body).length; _i++) {
    const key = Object.keys(body)[_i]
    const value = Object.values(body)[_i]
    for (var _j = 0; _j < Object.keys(user).length; _j++) {
      const userKey = Object.keys(user)[_j]
      if (key === userKey) {
        user[key] = value
      }
    }
  }
  
  return response.status(200).json(user)
})

app.delete("/user/:cpf", checkAuthentication, (request, response) => {
  const { cpf } = request.params
  const userDeleted = users.findIndex(user => user.cpf === cpf)
  users.splice(userDeleted, 1)

  fs.writeFile ("./database/users.json", JSON.stringify(users), err => {
    if (err) throw err;
    }
  )

  return response.status(200).json('Deletado')
})