// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database:  'react_kanban',
      host:      'localhost',
      user:      'zbuzzeo',
      password:  'password',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database:  'react_kanban',
      host:      'postgres-primary-db',
      user:      'zbuzzeo',
      password:  'password',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
