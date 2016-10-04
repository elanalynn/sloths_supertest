'use strict'

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/sloth_db',
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/sloth_test_db',
    pool: {
      min: 1,
      max: 5,
    },
    debug:true,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
}
