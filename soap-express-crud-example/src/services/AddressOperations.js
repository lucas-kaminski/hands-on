const soap = require('soap')
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

exports.GetAddressByCEP = (args) => {
  soap.createClient(url, function (err, client) {
    client.consultaCEP(args, function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log(result, '5');
      }
    })
  })
}