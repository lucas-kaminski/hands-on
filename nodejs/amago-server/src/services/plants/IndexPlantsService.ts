import { PrismaClient, plant_collection } from '@prisma/client'

const prisma = new PrismaClient()

interface IRequest {
  collection: plant_collection | ''
}

class IndexPlantsService {
  async run({ collection }: IRequest) {
    const plants = await prisma.plants.findMany({
      orderBy: { name: 'asc' },
      where: { collection: collection !== '' ? collection : undefined },
    })

    return plants
  }
}

export default IndexPlantsService
