import mysql from 'mysql'
export const connection = mysql.createConnection({
  host: '0.0.0.0',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'users'
})

connection.connect(function (err) {
  if (err) return console.log(err)
  console.log('db conected!')
  createTable(connection)
})

export function createTable(conn) {
  const sql = "CREATE TABLE IF NOT EXISTS users (ID INT NOT NULL AUTO_INCREMENT, Nome VARCHAR(150) NOT NULL, CPF VARCHAR(11) NOT NULL, Email VARCHAR(100) NOT NULL, Telefone VARCHAR(12) NOT NULL, Endereco VARCHAR(100) NOT NULL, Cidade VARCHAR(100) NOT NULL, PRIMARY KEY (ID))"
  conn.query(sql, function (error, results, _fields) {
    if (error) return console.log(error);
  })
}

export function getAllUsers(conn, callback) {
  conn.query("SELECT * FROM users", function (err, rows) { if (err) { return console.log(err) } else callback(null, rows) });
}

export function addNewUser(conn, values) {
  const sql = "INSERT INTO users (Nome,CPF, Email,Telefone, Endereco, Cidade) VALUES ?";
  conn.query(sql, [values], function (error, results, fields) {
    if (error) return console.log(error);
    console.log('adicionou registros!');
    connection.end();//fecha a conexão
  });
}

