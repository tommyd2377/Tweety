const config = require('./dbConfig');
const pgp = require('pg-promise')();

module.exports = pgp(config);
