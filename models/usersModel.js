const db = require('../config/connection');

function getAllUsers() {
    return db.many(`
        SELECT *
        FROM users;
  `);
}

function getTweetsByUid(uid) {
    return db.many(`
        SELECT *
        FROM tweets
        WHERE tweets.creator_uid = $1;
  `, {
    uid
  });
}

function getUserProfile(uid) {
    return db.one(`
        SELECT *
        FROM users
        WHERE users.id = $1;
  `, uid
  );
}

module.exports = {
    getAllUsers,
    getTweetsByUid,
    getUserProfile
}