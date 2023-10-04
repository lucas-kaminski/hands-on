import { Request, Response } from 'express'

class CachepotsController {
  async index(req: Request, resp: Response) {
    // await createClassgroup.run()

    return resp.status(200).json()
  }
}

export default CachepotsController
