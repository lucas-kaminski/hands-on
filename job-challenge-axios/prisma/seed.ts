import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
  console.log('Seedling...')
  await prisma.users.create({
    data: {
      nome: 't1 dev',
      cpf: "001",
      email: "t1@t1.com",
      telefone: "41999999999",
      endereco: {
        create: {
          rua: 'rua t1',
          numero: 1,
          bairro: 'bairro t1',
          cidade: "Curitiba"
        }
      }
    },
  })

  await prisma.users.create({
    data: {
      nome: 't2 dev',
      cpf: "002",
      email: "t2@t2.com",
      telefone: "41888888888",
      endereco: {
        create: {
          rua: 'rua t2',
          numero: 2,
          bairro: 'bairro t2',
          cidade: "Curitiba"
        }
      }
    },
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })