const connection = require('./connect')

// -- USERS --

/*
* Select a user by fromId from the users table and return it, case of not found or error, return null
* @param {string} fromId - The fromId of the user to be selected
*/
module.exports.selectUserByFromId = async (fromId) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    SELECT * FROM users WHERE fromId = ?
  `

  const values = [fromId]

  try {
    const [rows, fields] = await cursor.execute(sql, values)
    return rows[0]
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

/*
* Insert a new user in the users table and return it, case of error, return null
* @param {string} fromId - The fromId of the user to be inserted
* @param {string} fromName - The fromName of the user to be inserted
* @param {string} status - The status of the user to be inserted
*/
module.exports.insertUser = async (fromId, fromName, status) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    INSERT INTO users (fromId, fromName, status) VALUES (?, ?, ?)
  `
  const values = [fromId, fromName, status]
  try {
    await cursor.execute(sql, values)
    const user = await this.selectUserByFromId(fromId)
    return user
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

/*
* Update a user in the users table and return it, case of error, return null
* @param {string} fromId - The fromId of the user to be updated
* @param {string} stripeCustomerId - The id of customer at stripe (atualizado no /pagamento/confirmar)
* @param {string} fromName - The fromName of the user to be updated
* @param {string} email - The email of the user to be updated
* @param {string} phone - The phone of the user to be updated
* @param {string} status - The status of the user to be updated
*/
module.exports.updateUser = async ({ fromId = null, fromName = null, stripeCustomerId = null, email = null, phone = null, status = null }) => {
  const params = { fromName, stripeCustomerId, email, phone, status, fromId }

  const conn = new connection()
  const cursor = await conn.connect()

  let sql = `UPDATE users SET `
  for (const key in params) {
    if (params[key] && key != 'fromId') {
      sql += `${key} = ?, `
    }
  }

  sql = sql.slice(0, -2)

  sql += ` WHERE fromId = ?`

  const values = Object.values(params).filter(value => value)

  try {
    await cursor.execute(sql, values)
    const user = await this.selectUserByFromId(fromId)
    return user
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

/*
* Select all users from the users table and return them, case of error, return null
*/
module.exports.selectAllUsers = async () => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    SELECT * FROM users
  `

  try {
    const [rows, fields] = await cursor.execute(sql)
    return rows
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

/*
*
*/
module.exports.selectUserByStripeCustomerId = async (stripeCustomerId) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    SELECT * FROM users WHERE stripeCustomerId = ?
  `

  const values = [stripeCustomerId]

  try {
    const [rows, fields] = await cursor.execute(sql, values)
    return rows[0]
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

// -- CHANNELS --

/*
* Select a channel by id from the channels table and return it, case of not found or error, return null
* @param {string} channelId - The id of the channel to be selected
*/
module.exports.selectChannelById = async (channelId) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    SELECT * FROM channels WHERE channelId = ?
  `

  const values = [channelId]

  try {
    const [rows, fields] = await cursor.execute(sql, values)
    return rows[0]
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

/*
* Insert a new channel in the channels table and return it, case of error, return null
* @param {string} channelId - The id of the channel to be inserted
* @param {string} channelName - The name of the channel to be inserted
*/
module.exports.insertChannel = async (channelId, channelName) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    INSERT INTO channels (channelId, channelName) VALUES (?, ?)
  `

  const values = [channelId, channelName]

  try {
    await cursor.execute(sql, values)
    const channel = await this.selectChannelById(channelId)
    return channel
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

/*
* Update a channel in the channels table and return it, case of error, return null
*/
module.exports.selectAllChannels = async () => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    SELECT * FROM channels
  `

  try {
    const [rows, fields] = await cursor.execute(sql)
    return rows
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

// -- PRODUCTS --
/*

*/
module.exports.selectAllProducts = async () => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    SELECT * FROM products
  `

  try {
    const [rows, fields] = await cursor.execute(sql)
    return rows
  }
  catch (error) {
    console.error(error)
    return null
  }
  finally {
    cursor.end()
  }
}

/*
* Select a product by id from the products table and return it, case of not found or error, return null
*/
module.exports.selectProductById = async (productId) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    SELECT * FROM products WHERE productId = ?
  `

  const values = [productId]

  try {
    const [rows, fields] = await cursor.execute(sql, values)
    return rows[0]
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

module.exports.updateProductId = async (productId, productStripeId) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    UPDATE products SET productStripeId = ? WHERE productId = ?
  `

  const values = [productStripeId, productId]

  try {
    await cursor.execute(sql, values)
    const product = await this.selectProductById(productId)
    return product
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}


// -- VIP --

module.exports.selectVipUserById = async (vipUserId) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    SELECT * FROM vip_users WHERE userId = ?
  `

  const values = [vipUserId]

  try {
    const [rows, fields] = await cursor.execute(sql, values)
    return rows[0]
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

module.exports.registrateUserAsVip = async (userId, productId, expirationDate, status) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const sql = `
    INSERT INTO vip_users (userId, productId, expirationDate, status) VALUES (?, ?, ?, ?)
  `

  const values = [userId, productId, expirationDate, status]

  try {
    await cursor.execute(sql, values)
    const vipUser = await this.selectVipUserById(userId)
    return vipUser
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}

module.exports.updateUserVip = async ({ userId = null, productId = null, expirationDate = null, status = null }) => {
  const conn = new connection()
  const cursor = await conn.connect()

  const params = { productId, expirationDate, status, userId }

  let sql = `UPDATE vip_users SET `
  for (const key in params) {
    if (params[key] && key != 'userId') {
      sql += `${key} = ?, `
    }
  }

  sql = sql.slice(0, -2)

  sql += ` WHERE userId = ?`

  const values = Object.values(params).filter(value => value)

  try {
    await cursor.execute(sql, values)
    const user = await this.selectUserByFromId(userId)
    return user
  } catch (error) {
    console.error(error)
    return null
  } finally {
    cursor.end()
  }
}
