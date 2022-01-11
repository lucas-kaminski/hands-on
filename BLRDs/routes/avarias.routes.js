const express = require('express')
const fs = require('fs');

const avariasRoutes = express()

avariasRoutes.post('/generateCSVfile', (req, res) => {
  const codigoRegional = 'PR'
  const numAlim = '1234567812345678'
  const numAvaria = '1234567891'

  let aux = 'teste|'
  Object.values(req.body).forEach(element => {
    aux += element + '|'
  })

  fs.writeFile(`AVARIAS/SAIDA/${codigoRegional}_NDS_${numAlim}_${numAvaria}_SP7_PARA_SOD.csv`, aux, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  delete aux

  return res.json({ status: 'OK' })
})

module.exports = avariasRoutes