module.exports = {
  production: {
    client: "mysql",
    connection: {
      host: '0.0.0.0',
      user: 'root',
      password: 'password',
      database: 'users'
    },
    useNullAsDefault: true,
  },
};