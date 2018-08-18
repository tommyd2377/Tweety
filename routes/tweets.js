const express = require('express');

const tweetsRouter = express.Router();
const {
  renderTweets,
  handleNewTweets,
} = require('../controllers/tweetController');

tweetsRouter.route('/')
  .get(renderTweets)
  .post(handleNewTweets);

module.exports = tweetsRouter;
