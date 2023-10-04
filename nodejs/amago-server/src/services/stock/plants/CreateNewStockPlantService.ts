import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface IRequest {
  plant_id: number
}

class CreateNewStockPlantService {
  async run({ plant_id }: IRequest) {
    const plant = await prisma.plants.findFirst({
      where: {
        id: plant_id,
      },
    })

    if (!plant) {
      throw new Error('Plant not found')
    }

    const stockPlant = await prisma.stock_plants.create({
      data: {
        plant: {
          connect: {
            id: plant.id,
          },
        },
        recommended_max_price:
          plant.purchase_price * (1 + Number(process.env.MAX_PERCENTAGE)),
        recommended_min_price:
          plant.purchase_price * (1 - Number(process.env.MIN_PERCENTAGE)),
      },
    })

    return stockPlant
  }
}

export default CreateNewStockPlantService
