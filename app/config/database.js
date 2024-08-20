const env_variables = require('./env_variables.js');

module.exports = {
  testing: {
    username: env_variables.userName,
    password: env_variables.password,
    database: env_variables.database,
    host: env_variables.host,
    dialect: env_variables.dialect,
    port: env_variables.database_port,
    logging: env_variables.logging,
    dialectOptions:{
        "ssl": env_variables.ssl,
        "useUTC": env_variables.useUTC,
    }
  },
  development: {
    username: env_variables.userName,
    password: env_variables.password,
    database: env_variables.database,
    host: env_variables.host,
    dialect: env_variables.dialect,
    port: env_variables.database_port,
    logging: env_variables.logging,
    dialectOptions:{
        "ssl": env_variables.ssl,
        "useUTC": env_variables.useUTC,
    }
  },
  production: {
    username: env_variables.userName,
    password: env_variables.password,
    database: env_variables.database,
    host: env_variables.host,
    dialect: env_variables.dialect,
    port: env_variables.database_port,
    logging: env_variables.logging,
    dialectOptions:{
        "ssl": env_variables.ssl,
        "useUTC": env_variables.useUTC,
    }
  }
}
