const soap = require('soap');
const url = 'http://localhost:3000/wsdl?wsdl';

// Create client
soap.createClient(url, function (err, client) {
  if (err) {
    throw err;
  }
  var args = {
    name: "Lucas",
  };
  // console.log('Calling service...', client);
  // call the service
  client.SayHelloCommand(args, function (err, res) {
    console.log(args)
    console.log(res)
  });
});