// all config files I got from John's auth example
const pgp = require('pg-promise')({
  query(q) {
    console.log(q.query);
  },
});

const dbConfig = require('./dbConfig');

module.exports = {
  db: pgp(dbConfig),
  helpers: pgp.helpers,
};
