
const connection = require('./connect')

var myArgs = process.argv.slice(2);

// Função que instancia o banco de dados e retorna um cursor, utilizado em cada parâmetro
const createCursor = async () => {
  const conn = new connection()
  const cursor = await conn.connect()
  return cursor
}

// Função tipo script que executa as queries no banco conforme os parâmetros passados
const main = async () => {
  if (myArgs.includes('-d')) {
    const cursor = await createCursor()

    const sql = `
      TRUNCATE TABLE users
    `

    const sql2 = `
      TRUNCATE TABLE channels
    `

    const sql3 = `
      TRUNCATE TABLE products
    `

    const sql4 = `
      TRUNCATE TABLE vip_users
    `

    const sql101 = `
      DROP TABLE IF EXISTS users
    `

    const sql102 = `
      DROP TABLE IF EXISTS channels
    `

    const sql103 = `
      DROP TABLE IF EXISTS products
    `

    const sql104 = `
      DROP TABLE IF EXISTS vip_users
    `

    try {
      await cursor.execute('SET FOREIGN_KEY_CHECKS = 0')

      await cursor.execute(sql)
      await cursor.execute(sql2)
      await cursor.execute(sql3)
      await cursor.execute(sql4)

      await cursor.execute(sql101)
      await cursor.execute(sql102)
      await cursor.execute(sql103)
      await cursor.execute(sql104)

      await cursor.execute('SET FOREIGN_KEY_CHECKS = 1')
    } catch (error) {
      console.error(error)
    } finally {
      console.info('Tabela deletada com sucesso')
      cursor.end()
    }
  }

  if (myArgs.includes('-c')) {
    const cursor = await createCursor()

    // STATUS: 'awaiting_email', 'updating_email, 'awaiting_phone', 'updating_phone', 'registered_now', 'updated_now', 'completed'
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        fromId VARCHAR(255) NOT NULL,
        stripeCustomerId VARCHAR(255),
        fromName VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        phone VARCHAR(255),
        status VARCHAR(255),
        PRIMARY KEY (fromId)
      )
    `

    const sql2 = `
      CREATE TABLE IF NOT EXISTS channels (
        channelId VARCHAR(255) NOT NULL,
        channelName VARCHAR(255) NOT NULL,
        PRIMARY KEY (channelId)
      )
    `

    const sql3 = `
        CREATE TABLE IF NOT EXISTS products (
          productId INT NOT NULL AUTO_INCREMENT,
          productStripeId VARCHAR(255) UNIQUE,
          productName VARCHAR(255) NOT NULL,
          productDescription VARCHAR(255) NOT NULL,
          productPrice FLOAT(2) NOT NULL,
          productValidityInDays INT NOT NULL,
          PRIMARY KEY (productId)
        )
      `

    // STATUS: 'awaiting_payment', 'active', 'cancelled', 'expired'
    const sql4 = `
      CREATE TABLE IF NOT EXISTS vip_users (
        vipUserId INT NOT NULL AUTO_INCREMENT,
        userId VARCHAR(255) NOT NULL,
        productId VARCHAR(255) NOT NULL,
        expirationDate DATETIME,
        status VARCHAR(255) NOT NULL,
        PRIMARY KEY (vipUserId),
        FOREIGN KEY (userId) REFERENCES users(fromId) ON DELETE CASCADE,
        FOREIGN KEY (productId) REFERENCES products(productStripeId) ON DELETE CASCADE
      )
    `

    try {
      await cursor.execute(sql)
      await cursor.execute(sql2)
      await cursor.execute(sql3)
      await cursor.execute(sql4)
    } catch (error) {
      console.error(error)
    } finally {
      console.info('Tabela criada com sucesso')
      cursor.end()
    }
  }

  if (myArgs.includes('-i')) {
    const cursor = await createCursor()

    const sql3 = `
      INSERT INTO products (productId, productName, productDescription, productPrice, productValidityInDays) VALUES (?, ?, ?, ?, ?)
    `

    const valuesProducts1 = ['1', 'VIP MENSAL [VIP 249]', '', '249.90', '30']
    const valuesProducts3 = ['2', 'VIP TRIMESTRAL [VIP 229]', '', '229.90', '90']
    const valuesProducts2 = ['3', 'VIP SEMESTRAL [VIP 189]', '', '189.90', '180']
    const valuesProducts4 = ['4', 'VIP [VIP 689]', '', '689.70', '90']
    const valuesProducts5 = ['5', 'VIP [VIP 1134]', '', '1134.40', '180']
    const values3 = [valuesProducts1, valuesProducts2, valuesProducts3, valuesProducts4, valuesProducts5]

    try {
      for (i of values3) {
        await cursor.execute(sql3, i)
      }
    } catch (error) {
      console.error(error)
    } finally {
      console.info('Banco de dados inicializado com sucesso')
      cursor.end()
    }
  }

  if (myArgs.includes('-k')) {
    const cursor = await createCursor()
    const processes = await cursor.execute('SHOW FULL PROCESSLIST')
    for (i of processes) {
      if (i.State === 'Open') {
        await cursor.execute(`KILL ${i.Id}`)
      }
    }
    console.info('Processos encerrados com sucesso')
    cursor.end()
  }

  if (myArgs === []) {
    console.info('Uso: node seed.js -c para criar tabela')
    console.info('Uso: node seed.js -d para deletar tabela')
    console.info('Uso: node seed.js -i para inserir usuário para teste no insomnia')
  }

  console.info('Banco de dados recriado, request para a rota de sync para finalizar')

  process.exit()
}

main()