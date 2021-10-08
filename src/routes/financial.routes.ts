import { Router } from 'express'

import FinancialController from '@controllers/financial/FinancialController'

const rFinancial = Router()
const financialController = new FinancialController()

// rUser: '/v2/financial' +
rFinancial.get('/', financialController.index)

export default rFinancial
