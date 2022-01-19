const soap = require('soap');
const url = 'http://localhost:3000/user?wsdl';

// Create client
soap.createClient(url, function (err, client) {


  client.CreateUserOperation({
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

  client.ReadUserOperation({
    email: "teste@teste.com",
  }, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result, '2');
    }
  });

  client.UpdateUserOperation({
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

  client.DeleteUserOperation({
    email: "teste@teste.com",
  }, function (err, result) {
    if (err) {
      console.log('err')
    } else {
      console.log(result, '4');
    }
  });
});