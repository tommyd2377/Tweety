const pgp = require('pg-promise')({
    query(q) {
      console.log(q.query);
    },
  });
  
  const dbConfig = require('./dbConfig');
  
  // execute pgp with our db config, so a connection is made.
  // @see https://github.com/vitaly-t/pg-promise#query-result-mask
  module.exports = {
    db:      pgp(dbConfig),
    helpers: pgp.helpers,
  };