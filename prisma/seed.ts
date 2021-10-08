import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.plants.create({
    data: {
      id: 1,
      name: 'Begônia Maculata',
      collection: 'Pessoal',
    },
  })

  await prisma.propagation.create({
    data: {
      mother_plant_id: 1,
      obs: 'seed',
    },
  })

  await prisma.cachepots.create({
    data: {
      description: 'De pano, quadriculado, preto e branco',
      size: '13cm',
      purchase_price: 24.75,
    },
  })

  await prisma.purchases.create({
    data: {
      place: 'Loja das sementes',
      value: 54.65,
      cachepots: {
        create: {
          id: 2,
          description: 'PURCHASE',
          size: '13cm',
          purchase_price: 24.75,
        },
      },
      plants: {
        create: {
          name: 'PURCHASE - Colar de pérolas',
          collection: 'Loja',
          purchase_price: 29.9,
        },
      },
    },
  })

  await prisma.stock.create({
    data: {
      id: 1,
      selling_price: 45,
      plant: {
        connect: {
          id: 2,
        },
      },
    },
  })

  await prisma.sellings.create({
    data: {
      final_price: 57,
      freight: {
        create: {
          district: 'Bigorrilho',
          value: 12,
        },
      },
      stocks: {
        connect: {
          id: 1,
        },
      },
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
