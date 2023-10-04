const soap = require('soap');
const express = require('express');
var fs = require('fs');

const app = express();
const xml = fs.readFileSync('service.wsdl', 'utf8');

const sayHelloFunction = (args) => {
  console.log('Hello ' + args.name)
  return {
    result: 'Hello' + args.name
  }
}

const serviceObject = {
  SayHelloService: {
    SayHelloServiceServiceSoapPort: {
      SayHelloCommand: sayHelloFunction
    }
  },
}

app.get('/', (req, res) => {
  return res.send('Hello World!');
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
  soap.listen(app, '/wsdl', serviceObject, xml);
  console.log("Check http://localhost:" + '3000' + '/wsdl' + "?wsdl to see if the service is working");
})