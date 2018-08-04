const tweet = require('../models/tweetModel');
const user = require('../models/user');

function renderTweets(req, res) {
    res.render('auth/tweetForm');
}

function handleNewTweets(req, res, next) {
    const newTweet = req.body.tweet;
    let uid = user.getUid('tom@gopulse.io');
    uid.then(uid => 
             console.log(uid.id)).then
    tweet.newTweet(newTweet, uid.id)
        .then(newTweet => 
            res.redirect('/tweets')
        )
        .catch(error => 
            console.log(error)
        )
}

module.exports = {
    renderTweets,
    handleNewTweets,
}