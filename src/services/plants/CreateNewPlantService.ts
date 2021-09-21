import { PrismaClient, plant_collection } from '@prisma/client'

const prisma = new PrismaClient()

interface IRequest {
  name?: string
  collection?: plant_collection
  description?: string
  purchase_price?: number
}

class CreateNewPlantService {
  async run({ description, name, purchase_price, collection }: IRequest) {
    console.log(description, name, purchase_price, collection)
    if (!name || !description || !collection) {
      throw new Error('Plant name is required')
    }

    const plant = await prisma.plants.create({
      data: {
        description,
        collection,
        name,
        purchase_price,
        selling_min_price: (purchase_price && purchase_price * (1 + 0.15)) ?? 0,
        selling_max_price: (purchase_price && purchase_price * (1 + 0.3)) || 0,
      },
    })

    return plant
  }
}

export default CreateNewPlantService
