const express = require('express');
const usersRouter = express.Router();
const {
  renderUsers
} = require('../controllers/usersController');

usersRouter.route('/')
  .get(renderUsers)

module.exports = usersRouter;