"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushRow = exports.createTable = exports.connection = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.connection = mysql_1.default.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'users'
});
exports.connection.connect(function (err) {
    if (err)
        return console.log('erro db');
    console.log('db conected!');
    createTable(exports.connection);
});
function createTable(conn) {
    const sql = "CREATE TABLE IF NOT EXISTS users (ID INT NOT NULL AUTO_INCREMENT, Nome VARCHAR(150) NOT NULL, CPF VARCHAR(11) NOT NULL, Email VARCHAR(100) NOT NULL, Telefone VARCHAR(12) NOT NULL, Endereco VARCHAR(100) NOT NULL, Cidade VARCHAR(100) NOT NULL, PRIMARY KEY (ID))";
    conn.query(sql, function (error, results, _fields) {
        if (error)
            return console.log(error);
    });
}
exports.createTable = createTable;
function pushRow(conn, values) {
    const sql = "INSERT INTO users (Nome,CPF, Email,Telefone, Endereco, Cidade) VALUES ?";
    conn.query(sql, [values], function (error, results, fields) {
        if (error)
            return console.log(error);
        console.log('adicionou registros!');
        exports.connection.end(); //fecha a conexão
    });
}
exports.pushRow = pushRow;
//# sourceMappingURL=config.js.map