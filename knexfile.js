'use strict'

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/sloth_db',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
}
