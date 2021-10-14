import { PrismaClient, plant_collection, origin_plant } from '@prisma/client'

const prisma = new PrismaClient()

interface IRequest {
  name?: string
  collection?: plant_collection
  propagation_id?: number
  description?: string
  origin?: string
}

class CreateNewPlantService {
  async run({ description, name, collection, propagation_id, origin }: IRequest) {
    if (!name || !description || !collection) {
      throw new Error('Plant name is required')
    }

    const formattedOrigin = (propagation_id && 'Propagacao') || origin

    const plant = await prisma.plants.create({
      data: {
        collection,
        name,
        origin: formattedOrigin as origin_plant,
        description,
        propagation: propagation_id
          ? {
              create: { mother_plant: { connect: { id: propagation_id } } },
            }
          : undefined,
      },
    })

    return plant
  }
}

export default CreateNewPlantService
