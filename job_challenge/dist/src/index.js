"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../database/config");
const app = express_1.default();
app.listen(3333);
app.use(express_1.default.json());
//Users function
const users = require('../database/users.json');
function findUser(cpf) {
    return users.find(user => user.cpf === cpf);
}
function saveUsers() {
    fs_1.default.writeFile("./database/users.json", JSON.stringify(users), err => {
        if (err)
            throw err;
    });
}
//middlewares
//fix any, need extends express.Request for could pass props for request
function checkAuthentication(request, response, next) {
    const { cpf } = request.headers;
    const user = users.find(user => user.cpf === cpf);
    if (!user) {
        return response.status(400).json({ error: "Autenticação inválida, conferir headers." });
    }
    request.user = user;
    return next();
}
//all users
app.get("/users/", checkAuthentication, (request, response) => {
    return response.status(200).json(users);
});
//one user 
app.post("/user", (request, response) => {
    const { nome, cpf, email, telefone, endereco, cidade } = request.body;
    if (!nome || !cpf || !email || !telefone || !endereco || !cidade) {
        return response.status(400).json('Dados faltando');
    }
    // const userExists = findUser(cpf)
    // if (userExists) {
    //   return response.status(400).json({error: "CPF já cadastrado"})
    // }
    const user = {
        id: uuid_1.v4(),
        nome,
        cpf,
        email,
        telefone,
        endereco,
        cidade
    };
    users.push(user);
    saveUsers();
    config_1.pushRow(config_1.connection, [[nome, cpf, email, telefone, endereco, cidade]]);
    return response.status(200).json('Criado com sucesso!');
});
app.get("/user/:cpf", checkAuthentication, (request, response) => {
    const { cpf } = request.params;
    const user = findUser(cpf);
    return response.status(200).json(user);
});
app.patch("/user/:cpf", checkAuthentication, (request, response) => {
    const body = request.body;
    let { cpf } = request.params;
    const user = findUser(cpf);
    for (var i = 0; i < Object.keys(body).length; i++) {
        const check = Object.keys(user).includes(Object.keys(body)[i]);
        if (!check) {
            return response.status(400).json({ error: `${Object.keys(body)[i]} não existe nos atributos do usuário` });
        }
    }
    for (var _i = 0; _i < Object.keys(body).length; _i++) {
        const key = Object.keys(body)[_i];
        const value = Object.values(body)[_i];
        for (var _j = 0; _j < Object.keys(user).length; _j++) {
            const userKey = Object.keys(user)[_j];
            if (key === userKey) {
                user[key] = value;
            }
        }
    }
    return response.status(200).json(user);
});
app.delete("/user/:cpf", checkAuthentication, (request, response) => {
    const { cpf } = request.params;
    users.splice(users.findIndex(user => user.cpf === cpf), 1);
    saveUsers();
    return response.status(200).json('Deletado');
});
//# sourceMappingURL=index.js.map