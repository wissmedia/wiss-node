require('dotenv').config()

const config = {
  app : {
    host : process.env.APP_HOST || 'localhost',
    port : parseInt(process.env.APP_PORT) || 1234
  },
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    user: process.env.DB_USERNAME || 'admin',
    pass: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'db_test',
    db_string: process.env.DB_CONN_STRING
  }
}

module.exports = config