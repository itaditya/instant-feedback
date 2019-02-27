const path = require('path');

const BASE_PATH = path.join(__dirname, 'db');

const baseConfig = {
    client: 'pg',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }

module.exports = {
  production: {
    connection: 'postgres://aovtapmj:5ZarG0cM7sw4Kz13TZIz6sej7Po1LSn4@pellefant.db.elephantsql.com:5432/aovtapmj',
    ...baseConfig
  },
  development: {
    connection: 'postgres://aovtapmj:5ZarG0cM7sw4Kz13TZIz6sej7Po1LSn4@pellefant.db.elephantsql.com:5432/aovtapmj',
    ...baseConfig
  }
};
