const tweet = require('../models/tweetModel');
const user = require('../models/user');
const passport = require('passport');
const session = require('express-session');

function renderTweets(req, res) {
    res.render('auth/tweetForm');
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