const dotenv = require("dotenv");
dotenv.config();

const mysql_credentials = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const url = require("url");
  const url_from_env = `mysql://${mysql_credentials.user}:${mysql_credentials.password}@${mysql_credentials.host}:${mysql_credentials.port}/${mysql_credentials.database}`;
  const connection = await mysql.createConnection(url_from_env);
  console.log("Conectou no MySQL!");
  global.connection = connection;
  return connection;
}

async function selectAllFraternityUsers() {
  const conn = await connect();
  const [rows] = await conn.query(
    "SELECT * FROM users WHERE ID IN (SELECT USER_ID FROM vw_allFraternityActiveTransactions)"
    // "SELECT * FROM users WHERE ID IN (13299)"
  );
  return rows;
}

async function selectAllAdmUsers() {
  const conn = await connect();
  const [rows] = await conn.query(
    "SELECT * FROM users WHERE ID IN (SELECT USER_ID FROM adm_users)"
  );
  return rows;
}

async function saveWhatsappId(userId, whatsappId) {
  const conn = await connect();
  const [rows] = await conn.query(
    "UPDATE users SET WHATSAPP_ID = ? WHERE ID = ?",
    [whatsappId, userId]
  );
  return rows;
}

async function createChannel(channelWhatsappId, channelName) {
  const conn = await connect();
  const [rows] = await conn.query(
    "INSERT INTO channels (WHATSAPP_ID, NAME) VALUES (?, ?)",
    [channelWhatsappId, channelName]
  );
  return rows;
}

async function getUser(userId) {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM users WHERE ID = ?", [userId]);
  return rows;
}

async function getChannel(channelId) {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM channels WHERE ID = ?", [
    channelId,
  ]);
  return rows;
}
module.exports = {
  selectAllFraternityUsers,
  selectAllAdmUsers,
  saveWhatsappId,
  createChannel,
  getUser,
  getChannel,
};
