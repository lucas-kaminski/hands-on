const express = require('express') //inicializa o express
const app = express()

app.listen(3333) //starta o app, passando a porta especifica
//localhost:3333

app.get("/", (request, response) => {
  return response.json({message: "Hello world!"}) //retorna um json
  // return response.send("Hello World!") //renderiza por html
})

/* 
* GET - Buscar informação dentro do server
* POST - Inserir informações no server
* PUT - Alterar uma informação
* PATCH - Altera uma informação específica
* DELETE - Deletar informação
*/

app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response) => { //:id é um parametro pela rota
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"])
})