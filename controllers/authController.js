const passport = require('passport');
const user = require('../models/user');

function renderLogin(req, res) {
  res.render('auth/login');
}

const handleLogin = passport.authenticate('local', {
  successRedirect: '/tweets',
  failureRedirect: '/auth/register',
  failureFlash:    'Invalid username and password',
});

function renderRegister(req, res) {
  res.render('auth/register');
}

function handleRegister(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  user.register(username, email, password)
    .then((newUser) => {
      console.log(newUser);
      req.login((newUser, err) => {
        console.log(newUser);
        (err ? next(err) : res.redirect('/tweets'));
        res.send(req.user);
      })
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/auth/login');
    })
}

function handleLogout (req, res) {
  req.logout();
  res.redirect('/auth/login');
}

module.exports = {
  renderLogin,
  handleLogin,
  renderRegister,
  handleRegister,
  handleLogout,
};
