const soap = require('soap');

soap.createClient('http://localhost:3000/SOAP/user?wsdl', function (err, client) {
  client.CreateUser({
    name: "Lucas",
    age: 21,
    email: "teste@teste.com"
  }, function (err, result) {
    if (err) {
      // console.log(err);
    } else {
      console.log(result, '1');
    }
  });

  client.ReadUser({
    email: "teste@teste.com",
  }, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result, '2');
    }
  });

  client.UpdateUser({
    name: "Lucas Kaminski",
    age: 22,
    email: "teste2@teste.com",
  }, function (err, result) {
    if (err) {
      console.log('err')
    } else {
      console.log(result, '3');
    }
  });

  client.DeleteUser({
    email: "teste@teste.com",
  }, function (err, result) {
    if (err) {
      console.log('err')
    } else {
      console.log(result, '4');
    }
  });
});

console.log('address')

soap.createClient('http://localhost:3000/SOAP/address?wsdl', function (err, client) {
  client.GetAddressByCEP({
    cep: "80230130"
  }, function (err, result) {
    if (err) {
      console.log('err')
    } else {
      console.log(result, '5');
    }
  });
})