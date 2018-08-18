const tweet = require('../models/tweetModel');

function renderTweets(req, res) {
  tweet.getAll()
    .then((tweets) => {
      res.locals.tweets = tweets;
      res.render('auth/tweetForm', {
        data: res.locals.tweets,
      });
    });
}

function handleNewTweets(req, res) {
  const newTweet = req.body.tweet;

  tweet.newTweet(newTweet)
    .then(() => res.redirect('/tweets'))
    .catch(error => console.log(error));
}

module.exports = {
  renderTweets,
  handleNewTweets,
};
