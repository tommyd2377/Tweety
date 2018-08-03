module.exports = {
    host:     process.env.DB_HOST || 'localhost',
    port:     process.env.DB_PORT || 3000,
    database: process.env.DB_NAME || 'tweety_db',
  };