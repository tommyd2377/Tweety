// all config files I got from John's auth example
const pgp = require('pg-promise')();
const config = require('./dbConfig');

module.exports = pgp(config);
