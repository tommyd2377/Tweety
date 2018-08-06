const tweet = require('../models/tweetModel');
const passport = require('passport');

function renderTweets(req, res, next) {
    tweet.getAll()
        .then(tweets => {
            console.log(tweets);
            res.locals.tweets = tweets;
            res.render('auth/tweetForm', {
                data: res.locals.tweets
            })
        })
}

function handleNewTweets(req, res, next) {
    const newTweet = req.body.tweet;
    passport.authenticate('local'),
    tweet.newTweet(newTweet, req.user.id)
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

