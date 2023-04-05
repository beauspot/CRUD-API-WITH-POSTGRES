// for setting up the config.js file
// to use the es6 module syntax
export default {
  development: {
    username: "postgres",
    password: "password",
    database: "my_database",
    host: "localhost",
    dialect: "postgres",
    logging: false,
  },
};

/* {
  "development": {
    "username": "beau",
    "password": "b1058019",
    "database": "ES6_CRUD_BABEL",
    "port": "5432",
    "host": "127.0.0.1",
    "dialect": "postgres"

  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
 */
