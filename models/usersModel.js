const db = require('../config/connection');

function getAllUsers() {
    return db.many(`
        SELECT *
        FROM users;
  `);
}

module.exports = {
    getAllUsers
}