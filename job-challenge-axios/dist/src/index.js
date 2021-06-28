"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var jwt = require('jsonwebtoken');
var redis = require('promise-redis')();
var app = express_1["default"]();
app.listen(3333);
app.use(express_1["default"].json());
var prisma = new client_1.PrismaClient();
var serverRedis = redis.createClient();
serverRedis.on("error", function (error) {
    console.error(error);
});
//middleware
function verifyJWT(request, response, next) {
    return __awaiter(this, void 0, void 0, function () {
        var redisToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, serverRedis.get("token")];
                case 1:
                    redisToken = _a.sent();
                    if (!redisToken)
                        return [2 /*return*/, response.status(401).json({ auth: false, message: 'Não existe token' })];
                    jwt.verify(JSON.parse(redisToken), process.env.SECRET, function (err, decoded) {
                        if (err)
                            return response.status(500).json({ auth: false, message: 'Token inválido' });
                    });
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
//ping
app.get("/", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, response.json('Servidor online')];
    });
}); });
//folder session
app.post("/login", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, login, password, searchUser, id, token;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, login = _a.login, password = _a.password;
                return [4 /*yield*/, prisma.users.findFirst({ where: { login: login } })];
            case 1:
                searchUser = _b.sent();
                if (!searchUser) {
                    return [2 /*return*/, response.status(400).json("Login inválido")];
                }
                if (!(password === (searchUser === null || searchUser === void 0 ? void 0 : searchUser.password))) return [3 /*break*/, 3];
                id = 1;
                token = jwt.sign({ id: id }, process.env.SECRET, {
                    expiresIn: 300
                });
                return [4 /*yield*/, serverRedis.set("token", JSON.stringify(token))];
            case 2:
                _b.sent();
                return [2 /*return*/, response.status(200).json({ auth: true, token: token })];
            case 3: return [2 /*return*/, response.status(400).json("Senha inválida")];
        }
    });
}); });
app.get("/logout", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        serverRedis.del('token');
        return [2 /*return*/, response.status(200).json("Logout realizado com sucesso")];
    });
}); });
//folder users
//All users
app.get("/users", verifyJWT, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.users.findMany()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, response.status(200).json(users)];
        }
    });
}); });
//Single users
app.get("/user/:cpf", verifyJWT, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var cpf, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cpf = request.params.cpf;
                return [4 /*yield*/, prisma.users.findFirst({ where: { cpf: cpf } })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, response.status(400).json("CPF não cadastrado")];
                }
                return [2 /*return*/, response.status(200).json(user)];
        }
    });
}); });
app.post("/user", function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nome, login, password, cpf, email, telefone, endereco, rua, numero, bairro, cidade, user, CreatedUser;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, nome = _a.nome, login = _a.login, password = _a.password, cpf = _a.cpf, email = _a.email, telefone = _a.telefone, endereco = _a.endereco;
                rua = endereco.rua, numero = endereco.numero, bairro = endereco.bairro, cidade = endereco.cidade;
                return [4 /*yield*/, prisma.users.findFirst({ where: { cpf: cpf } })];
            case 1:
                user = _b.sent();
                if (user) {
                    return [2 /*return*/, response.status(400).json('CPF já cadastrado')];
                }
                if (!nome || !cpf || !email || !telefone) {
                    return [2 /*return*/, response.status(400).json('Dados pessoais faltando, favor conferir!')];
                }
                if (!rua || !numero || !bairro || !cidade) {
                    return [2 /*return*/, response.status(400).json('Dados do endereço faltando, favor conferir!')];
                }
                return [4 /*yield*/, prisma.users.create({
                        data: {
                            nome: nome,
                            login: login,
                            password: password,
                            cpf: cpf,
                            email: email,
                            telefone: telefone,
                            endereco: { create: { rua: rua, numero: numero, bairro: bairro, cidade: cidade } }
                        }
                    })];
            case 2:
                CreatedUser = _b.sent();
                return [2 /*return*/, response.status(200).json(CreatedUser)];
        }
    });
}); });
app.patch("/user/:cpfParam", verifyJWT, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nome, cpf, email, telefone, endereco, rua, numero, bairro, cidade, cpfParam, alteredUser;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, nome = _a.nome, cpf = _a.cpf, email = _a.email, telefone = _a.telefone, endereco = _a.endereco;
                rua = endereco.rua, numero = endereco.numero, bairro = endereco.bairro, cidade = endereco.cidade;
                cpfParam = request.params.cpfParam;
                return [4 /*yield*/, prisma.users.update({
                        where: { cpf: cpfParam },
                        data: { nome: nome, cpf: cpf, email: email, telefone: telefone, endereco: { update: { rua: rua, numero: numero, bairro: bairro, cidade: cidade } } }
                    })];
            case 1:
                alteredUser = _b.sent();
                if (!alteredUser) {
                    return [2 /*return*/, response.status(400).json('Nenhum usuário encontrado com este cpf')];
                }
                return [2 /*return*/, response.status(200).json(alteredUser)];
        }
    });
}); });
app["delete"]("/user/:cpfParam", verifyJWT, function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var cpfParam, deletedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cpfParam = request.params.cpfParam;
                return [4 /*yield*/, prisma.users["delete"]({
                        where: { cpf: cpfParam }
                    })];
            case 1:
                deletedUser = _a.sent();
                return [2 /*return*/, response.status(200).json(deletedUser)];
        }
    });
}); });
//# sourceMappingURL=index.js.map