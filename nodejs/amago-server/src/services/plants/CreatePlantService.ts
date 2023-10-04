import { PrismaClient, plant_collection } from '@prisma/client'

const prisma = new PrismaClient()

interface IRequest {
  name?: string
  collection?: plant_collection
  description?: string
  purchase_price?: string
}

class CreatePlantService {
  async run({ description, name, purchase_price, collection }: IRequest) {
    if (!name || !collection) {
      throw new Error('name is required')
    }

    const plant = await prisma.plants.create({
      data: {
        description,
        collection,
        name,
        purchase_price: Number(purchase_price),
      },
    })

    return plant
  }
}

export default CreatePlantService
