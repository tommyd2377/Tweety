//all config files I got from John's auth example
const config = require('./dbConfig');
const pgp = require('pg-promise')();

module.exports = pgp(config);
