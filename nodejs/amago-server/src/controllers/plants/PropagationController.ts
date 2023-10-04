import { Request, Response } from 'express'

class PropagationController {
  async index(req: Request, resp: Response) {
    // await createClassgroup.run()

    return resp.status(200).json()
  }
}

export default PropagationController
