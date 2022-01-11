const express = require('express')

const intranetRoutes = express()

/*
  *@obs As several routes validate the UC, the validation is global
  *@param {string} UC - Value to validate
  *@return {boolean} - True if UC is valid, false otherwise
  *@example 
  * validateUC('123456789123') // true
  * validateUC('12345678912') // false
  * validateUC('12345678912a') // false
*/
const isValidUC = (UC) => {
  if (!UC) {
    return false
  }
  if (UC.length !== 12 || !/^[0-9]+$/.test(UC)) {
    return false
  } else {
    return true
  }
}

intranetRoutes.get('/getUCShutdownHistory', (req, res) => {
  const { UC } = req.query

  if (isValidUC(UC)) {
    // QUESTION: O período é de min 12 meses, deve ser declarado como parâmetro tipo DEFINE de C++ ?
    // const months = 12

    // TODO: get data from database

    // QUESTION: É obrigação do interfaces externas fazer a manipulação dos dados ou eles já vão ser retornados na estrutura de retorno definida?

    return res.json({ teste: UC })
  } else {
    return res.json({ error: 'Invalid UC' })
  }
})

intranetRoutes.get('/getScheduledShutdownsByUC', (req, res) => {
  const { UC } = req.query

  if (!isValidUC(UC)) {
    return res.json({ error: 'Invalid UC' })
  }

  // const days = 15
  // const status = ['in_progress','scheduled']

  // TODO !!
  return res.json({ teste: UC })
})

intranetRoutes.get('/getServiceState', (req, res) => {
  const { numero } = req.query

  if (!numero) {
    return false
  }
  const aux = numero.split('.')
  if (aux[0].length !== 2 || aux[1].length !== 5 || aux[2].length !== 2) {
    return false
  }
  delete aux

  return res.json({ teste: UC })
})

module.exports = intranetRoutes;