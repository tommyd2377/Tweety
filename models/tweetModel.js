const db = require('../config/connection');

function newTweet(tweet_content, creator_username, creator_uid) {
    return db.one(`
        INSERT INTO tweets (tweet_content, creator_username, creator_uid)
        VALUES ($/tweet_content/, $/creator_username/, $/creator_uid/)
        RETURNING *
      `, {
        tweet_content,
        creator_username,
        creator_uid,
      });
}

function getAll() {
    return db.many(`
        SELECT *
      FROM tweets;
  `);
}

module.exports = {
    newTweet,
    getAll
}