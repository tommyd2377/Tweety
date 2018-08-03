const passport = require('passport');
const user = require('../models/user');

function renderLogin(req, res) {
  res.render('auth/login');
}

const handleLogin = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash:    'Invalid username and password',
});

function renderRegister(req, res) {
  res.render('auth/register');
}

function handleRegister(req, res, next) {
  // Get supplied credentials from request body
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  res.send(req.body);
  // register the new user
  user.register(username, email, password)
    .then((newUser) => {
      // if the user was created, log them in
      req.login(newUser, err => 
        (err ? next(err) : res.redirect('/')));
    })
    .catch((err) => {
      // if there was an error, we assume (yikes) it's the unique username constraint
      res.redirect('/auth/register');
    });
}

function handleLogout (req, res) {
  req.logout();
  res.redirect('/');
}

module.exports = {
  renderLogin,
  handleLogin,
  renderRegister,
  handleRegister,
  handleLogout,
};