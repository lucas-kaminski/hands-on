const soap = require('soap')
const express = require('express')
const fs = require('fs')

const userRoutes = require('./api/user.routes')

const { CreateUser, DeleteUser, ReadUser, UpdateUser } = require('./services/UserCrudOperations')
const { GetAddressByCEP } = require('./services/AddressOperations')

const app = express()
const SERVER_PORT = process.env.PORT || 3000;

const USER_WSDL = fs.readFileSync('src/api/user.wsdl', 'utf8');
const ADDRESS_WSDL = fs.readFileSync('src/api/address.wsdl', 'utf8');


const userServicesSoapObject = {
  CreateUserService: {
    CreateUserServiceSoapPort: { CreateUser }
  },
  ReadUserService: {
    ReadUserServiceSoapPort: { ReadUser }
  },
  UpdateUserService: {
    UpdateUserServiceSoapPort: { UpdateUser }
  },
  DeleteUserService: {
    DeleteUserServiceSoapPort: { DeleteUser }
  },
}

const addressServiceSoapObject = {
  GetAddressByCEPService: {
    GetAddressByCEPServiceSoapPort: { GetAddressByCEP }
  }
}

app.use((req, _, next) => {
  express.json()
  express.static('public')
  console.log(`[${req.method}] - ${req.url}`)
  next()
})

app.get('/', (_, res) => {
  return res.status(200).send('CRUD example using SOAP in Node.js with Express')
})

app.use('/REST/user', userRoutes)

app.listen(SERVER_PORT, () => {
  soap.listen(app, '/SOAP/user', userServicesSoapObject, USER_WSDL)
  soap.listen(app, '/SOAP/address', addressServiceSoapObject, ADDRESS_WSDL)
  console.log(`Server listening on port ${SERVER_PORT}`)
  console.log(`Check http://localhost:${SERVER_PORT}/SOAP/user?wsdl to see if the service is working`)
})