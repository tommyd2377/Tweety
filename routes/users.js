const express = require('express');
const usersRouter = express.Router();
const {
  renderUsers,
  renderUserProfile,
  renderUserTweets
} = require('../controllers/usersController');

usersRouter.route('/')
  .get(renderUsers)

  usersRouter.route('/:id')
  .get(renderUserProfile, renderUserTweets)

module.exports = usersRouter;