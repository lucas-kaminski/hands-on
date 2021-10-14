import { Request, Response } from 'express'

class FinancialController {
  async index(req: Request, resp: Response) {
    return resp.status(200).json()
  }
}

export default FinancialController
