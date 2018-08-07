const express = require('express');
const authRouter = express.Router();
const {
  renderLogin,
  renderRegister,
  handleLogin,
  handleRegister,
  handleLogout,
} = require('../controllers/authController');

authRouter.route('/login')
  .get(renderLogin)
  .post(handleLogin);

authRouter.route('/register')
  .get(renderRegister)
  .post(handleRegister);

authRouter.get('/logout', handleLogout);

module.exports = authRouter;