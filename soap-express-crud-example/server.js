const soap = require('soap')
const express = require('express')
const fs = require('fs')

const app = express()

const PORT = process.env.PORT || 3000;
const WSDL = fs.readFileSync('user.wsdl', 'utf8');

const serviceObject = {
  CreateUserService: {
    CreateUserServiceSoapPort: {
      CreateUserOperation: (args) => {
        console.log(args, new Date())
        return {
          result: [args.name, args.email]
        }
      }
    }
  },
  ReadUserService: {
    ReadUserServiceSoapPort: {
      ReadUserOperation: (args) => {
        console.log(args, new Date())
        return {
          result: [args.name, args.email]
        }
      }
    }
  },
  UpdateUserService: {
    UpdateUserServiceSoapPort: {
      UpdateUserOperation: (args) => {
        console.log(args, new Date())
        return {
          result: [args.name, args.email]
        }
      }
    }
  },
  DeleteUserService: {
    DeleteUserServiceSoapPort: {
      DeleteUserOperation: (args) => {
        console.log(args, new Date())
        return {
          result: [args.name, args.email]
        }
      }
    }
  },
}

app.use((req, _, next) => {
  console.log(`[${req.method}] - ${req.url}`)
  next()
})

app.get('/', (_, res) => {
  return res.status(200).send('CRUD example using SOAP in Node.js with Express')
})

app.listen(PORT, () => {
  soap.listen(app, '/user', serviceObject, WSDL);
  console.log(`Server listening on port ${PORT}`)
  console.log("Check http://localhost:" + '3000' + '/user' + "?wsdl to see if the service is working");
})