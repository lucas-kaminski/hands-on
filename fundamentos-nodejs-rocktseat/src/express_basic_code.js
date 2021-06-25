const express = require('express') //inicializa o express
const app = express()

app.listen(3333) //starta o app, passando a porta especifica
//localhost:3333

app.use(express.json())

app.get("/", (request, response) => {
  return response.json({message: "Hello world!"}) //retorna um json
  // return response.send("Hello World!") //renderiza por html
})

/* MÉTODOS
* GET - Buscar informação dentro do server
* POST - Inserir informações no server
* PUT - Alterar uma informação
* PATCH - Altera uma informação específica
* DELETE - Deletar informação
*/

app.get("/courses", (request, response) => {
  const query = request.query
  console.log(query) // /courses?page=1&order=asc
  return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.post("/courses", (request, response) => {
  const body = request.body
  console.log(body)
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response) => { //:id é um parametro pela rota (/courses/1)
  const params = request.params //pegar os route params
  const { id } = request.params //desestruturado
  console.log(params, 'estruturado')
  console.log(id, 'desestruturado')
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"])
})

/* PARÂMETROS
* Route Params => Na rota, obrigatório, passado para identificar um recurso para editar/deletar/buscar
* Query Params => Na rota, opcional, após o ?, serve para paginação / filtro | & separa os query
* Body Params => Obrigatório, Objetos para inserção/alteração (JSON) | tem que informar no express que é tipo JSON no app.use
*/