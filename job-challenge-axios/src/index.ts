import express from 'express'
import { PrismaClient } from '@prisma/client'

const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

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

let loggedUser: any = {}

//middleware
function verifyJWT(request: express.Request, response: express.Response, next: any) {
  // const token = request.headers['x-access-token']
  const token = loggedUser.token
  if (!token) return response.status(401).json({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, function (err: any, decoded: any) {
    if (err) return response.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

    // se tudo estiver ok, salva no requestuest para uso posterior
    loggedUser.validate = decoded.id;
    next();
  });
}

//ping
app.get("/", async (request: express.Request, response: express.Response) => {
  return response.json('Servidor online')
}
)

//authentication login
app.post("/login", (request: express.Request, response: express.Response) => {
  const { user, password } = request.body
  //fazer a busca do user e password por aqui
  if (user === 'teste' && password === 'teste') {
    const id = 1
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300
    })
    loggedUser = { id, token, validate: '' }
    return response.status(200).json({ auth: true, token: token })
  }
  return response.status(400).json("Login inválido")
})

//All users
app.get("/users", verifyJWT, async (request: express.Request, response: express.Response) => {
  const users = await prisma.users.findMany()
  return response.status(200).json(users)
})

//Single users
app.get("/user/:cpf", verifyJWT, async (request: express.Request, response: express.Response) => {
  const { cpf } = request.params
  const user = await prisma.users.findFirst({ where: { cpf: cpf } })

  if (!user) {
    return response.status(400).json("CPF não cadastrado")
  }

  return response.status(200).json(user)
})

app.post("/user", verifyJWT, async (request: express.Request, response: express.Response) => {
  const { nome, cpf, email, telefone, endereco }: IUser = request.body

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
      cpf,
      email,
      telefone,
      endereco: { create: { rua, numero, bairro, cidade } }
    }
  })

  return response.status(200).json(CreatedUser)
}
)

app.patch("/user/:cpfParam", verifyJWT, async (request: express.Request, response: express.Response) => {
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

app.delete("/user/:cpfParam", verifyJWT, async (request: express.Request, response: express.Response) => {
  const { cpfParam } = request.params

  const deletedUser = await prisma.users.delete({
    where: { cpf: cpfParam },
  })

  return response.status(200).json(deletedUser)
}
)