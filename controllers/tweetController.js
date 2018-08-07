const tweet = require('../models/tweetModel');

function renderTweets(req, res, next) {
    tweet.getAll()
        .then(tweets => {
            res.locals.tweets = tweets;
            res.render('auth/tweetForm', {
                data: res.locals.tweets
            })
        })
}

function handleNewTweets(req, res, next) {
    const newTweet = req.body.tweet;
 
    tweet.newTweet(newTweet)
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

