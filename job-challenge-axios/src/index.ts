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