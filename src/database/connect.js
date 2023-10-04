const mysql = require("mysql2/promise");
require('dotenv').config()

// Classe que representa a conexão com o banco de dados, necessário instanciar e chamar o método connect() para uma variável cursor para iniciar a conexão
class Connect {
  constructor() {
    this.connection = null
  }

  // Método que executa uma conexão com o banco de dados e retorna um cursor
  async connect() {
    if (this.connection && this.connection.state !== 'disconnected') {
      return this.connection
    } else {
      this.connection = await mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
      return this.connection
    }
  }
}

module.exports = Connect