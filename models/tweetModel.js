const db = require('../config/connection');

function newTweet(tweet_content, creator_uid) {
    return db.one(`
        INSERT INTO tweets (tweet_content, creator_uid)
        VALUES ($/tweet_content/, $/creator_uid/)
        RETURNING *
      `, {
        tweet_content,
        creator_uid,
      });
}

module.exports = {
    newTweet
}