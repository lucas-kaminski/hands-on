import express from 'express'
import { PrismaClient } from '@prisma/client'

const jwt = require('jsonwebtoken')

const redis = require('promise-redis')();

const app = express()
app.listen(3333)
app.use(express.json())

const prisma = new PrismaClient()

const serverRedis = redis.createClient();
serverRedis.on("error", (error: any) => {
  console.error(error);
})

interface IUser {
  nome: string,
  login: string,
  password: string,
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

//middleware
async function verifyAuth(request: express.Request, response: express.Response, next: any) {
  let redisToken = await serverRedis.get(`token`) //administrar para salvar por usuário
  serverRedis.expire('token', 86400) //1 dia
  if (!redisToken) return response.status(401).json({ auth: false, message: 'Não existe token' })

  jwt.verify(JSON.parse(redisToken), process.env.SECRET, function (err: any, decoded: any) {
    if (err) return response.status(500).json({ auth: false, message: 'Token inválido' })
  })
  next()
}

//ping
app.get("/", async (request: express.Request, response: express.Response) => {
  return response.json('Servidor online')
}
)

//folder session
app.post("/login", async (request: express.Request, response: express.Response) => {
  const { login, password } = request.body

  const searchUser = await prisma.users.findFirst({ where: { login: login } })

  if (!searchUser) {
    return response.status(400).json("Login inválido")
  }

  if (password === searchUser?.password) {
    const id = 1
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    })
    await serverRedis.set(`token`, JSON.stringify(token))
    return response.status(200).json({ auth: true, token: token })
  } else {
    return response.status(400).json("Senha inválida")
  }
})

app.get("/logout", async (request: express.Request, response: express.Response) => {
  serverRedis.del('token')
  return response.status(200).json("Logout realizado com sucesso")
})

//folder users

//Single users
app.post("/user", async (request: express.Request, response: express.Response) => {
  const { nome, login, password, cpf, email, telefone, endereco }: IUser = request.body

  const { rua, numero, bairro, cidade } = endereco

  const user = await prisma.users.findFirst({ where: { cpf: cpf } })

  if (user) {
    return response.status(400).json('CPF já cadastrado')
  }

  if (!nome || !cpf || !email || !telefone) {
    return response.status(400).json('Dados pessoais faltando, favor conferir!')
  }

  if (!rua || !numero || !bairro || !cidade) {
    return response.status(400).json('Dados do endereço faltando, favor conferir!')
  }

  const CreatedUser = await prisma.users.create({
    data: {
      nome,
      login,
      password,
      cpf,
      email,
      telefone,
      endereco: { create: { rua, numero, bairro, cidade } }
    }
  })

  return response.status(200).json(CreatedUser)
}
)

app.get("/user/:cpf", verifyAuth, async (request: express.Request, response: express.Response) => {
  const { cpf } = request.params
  const user = await prisma.users.findFirst({ where: { cpf: cpf } })

  if (!user) {
    return response.status(400).json("CPF não cadastrado")
  }

  return response.status(200).json(user)
})

app.patch("/user/:cpfParam", verifyAuth, async (request: express.Request, response: express.Response) => {
  const { nome, cpf, email, telefone, endereco }: IUser = request.body
  const { rua, numero, bairro, cidade } = endereco

  const { cpfParam } = request.params

  const alteredUser = await prisma.users.update({
    where: { cpf: cpfParam },
    data: { nome, cpf, email, telefone, endereco: { update: { rua, numero, bairro, cidade } } }
  })

  if (!alteredUser) {
    return response.status(400).json('Nenhum usuário encontrado com este cpf')
  }

  return response.status(200).json(alteredUser)
})

app.delete("/user/:cpfParam", verifyAuth, async (request: express.Request, response: express.Response) => {
  const { cpfParam } = request.params

  const deletedUser = await prisma.users.delete({
    where: { cpf: cpfParam },
  })

  return response.status(200).json(deletedUser)
}
)

//All users
app.get("/users", verifyAuth, async (request: express.Request, response: express.Response) => {
  const users = await prisma.users.findMany()
  return response.status(200).json(users)
})