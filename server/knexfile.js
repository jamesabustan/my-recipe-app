// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgress://localhost/recipes'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  },
  test: {
    client: 'postgresql',
    connection: 'postgress://localhost/test-recipes'
  }
  }


