// Update with your config settings.

module.exports = {


  client: 'postgresql',
  connection: {
    database: 'tasks',
    user: 'postgres',
    password: 'Levies19',
    // port: 8081,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
