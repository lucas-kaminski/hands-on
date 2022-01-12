const express = require('express')
const fs = require('fs');
const path = require('path');
const date_fns = require('date-fns');

const avariasRoutes = express()

const layout = {
  numNDS: 11223344,
  estadoNDS: '2',
  tipoNDS: 'Normal',
  numAlim: 1234567891234567,
  carSE: 123456,
  numEqpto: 8216001455,
  tipoEqpto: 'C',
  dataCriacao: date_fns.format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  dataConclusao: date_fns.format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  complementoEndSV: 'aaa',
  nomeCons: 'Lucas',
  ruaTransv: 'Rua',
  descSV: 'Descrição',
  ndsMNT: 'S',
  acessoCam: 'S',
  cestoAereo: 'S',
  linhaViva: 'S',
  consDeslig: 'S',
  existeAvaria: 'S',
  existeRisco: 'S',
  chaveAberta: 'S',
  jumperAberto: 'S',
  numOcorSOD: 1234567891,
  numSVEmergSOD: 1234567891,
  endSv: 'Rua teste',
  numUC: 1234567891,
  refUC: 'Referencia',
  foneCons: '41998119798',
  dataReclam: date_fns.format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  numPosto: '8216001455',
  siglaRegional: 'RJ',
  siglaSeccional: 'RJ',
}

avariasRoutes.post('/SOD/createAvaria', (req, res) => { // PARTE DO SOD DO 2.2
  req.body = layout // teste

  let aux = ''

  Object.values(req.body).forEach(element => {
    aux += element + '|' ?? '|'
  })

  fs.writeFile(path.join('.', 'AVARIAS', 'ENTRADA', `NDS_${req.body.numNDS}_${req.body.numAlim}_SOD_PARA_SP7.csv`), aux, (err) => {
    if (err) throw err;
  })

  delete aux

  return res.json({ status: 'OK' })
})

avariasRoutes.post('/OMS/createAvaria', (req, res) => { // PARTE DO OMS DO 2.2
  const { NDS } = req.query // É enviada a informação para identificar o arquivo NDS de que forma?
  fs.readdir(path.join('.', 'AVARIAS', 'ENTRADA'), (err, files) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].split('_')[1] === NDS) {
        fs.readFile(path.join('.', 'AVARIAS', 'ENTRADA', files[i]), 'utf8', (err, data) => {
          console.log(data)
          // createAvaria no SP7

          // fs.writeFile(path.join('.', 'AVARIAS', 'SAIDA', `${data.siglaReg}_NDS_${NDS}_${data.numAvaria}_SP7_PARA_SOD.csv`), outputData, (err) => {
          //   if (err) throw err;
          // })

          // return res.json({ status: 'OK' })
        })
      }
    }
  })
  return res.json({ status: 'OK' })
})

module.exports = avariasRoutes