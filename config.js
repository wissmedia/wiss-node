require('dotenv').config()

const config = {
  app : {
    host : process.env.APP_HOST || 'localhost',
    port : parseInt(process.env.APP_PORT) || 1234
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 27017,
    name: process.env.DB_NAME || 'db_test'
  }
}

module.exports = config