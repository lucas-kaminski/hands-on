import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
app.listen(3333)
app.use(express.json())

const prisma = new PrismaClient()

interface IUser {
  nome: string,
  cpf: string,
  email: string,
  telefone: string,
  endereco: {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string
  }
}

app.get("/users", async (request: express.Request, response: express.Response) => {
  const users = await prisma.users.findMany()
  return response.status(200).json(users)
})

app.get("/user/:cpf", async (request: express.Request, response: express.Response) => {
  const { cpf } = request.params
  const user = await prisma.users.findFirst({ where: { cpf: cpf } })

  return response.status(200).json(user)
})

app.post("/user", async (request: express.Request, response: express.Response) => {
  const { nome, cpf, email, telefone, endereco }: IUser = request.body

  const { rua, numero, bairro, cidade } = endereco

  if (!nome || !cpf || !email || !telefone || !endereco) {
    return response.status(400).json('Dados faltando')
  }

  const CreatedUser = await prisma.users.create({
    data: {
      nome,
      cpf,
      email,
      telefone,
      endereco: { create: { rua, numero, bairro, cidade } }
    }
  })

  return response.status(200).json(CreatedUser)
}
)

app.patch("/user/:cpfParam", async (request: express.Request, response: express.Response) => {
  const { nome, cpf, email, telefone, endereco }: IUser = request.body
  const { rua, numero, bairro, cidade } = endereco

  let { cpfParam } = request.params

  const user = await prisma.users.findFirst({ where: { cpf: cpfParam } })

  if (user) {
    const alteredUser = await prisma.users.update({
      where: { id: user.id },
      data: { nome, cpf, email, telefone, endereco: { update: { rua, numero, bairro, cidade } } }
    })
    response.status(200).json(alteredUser)
  } else {
    return response.status(400).json('Nenhum usuário encontrado com este cpf')
  }
})