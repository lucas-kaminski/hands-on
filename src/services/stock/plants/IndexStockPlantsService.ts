import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class IndexStockPlantsService {
  async run() {
    const stock = await prisma.stock_plants.findMany()
    return stock
  }
}

export default IndexStockPlantsService
