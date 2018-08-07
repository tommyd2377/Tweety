const user = require('../models/user');

function renderLogin(req, res) {
  res.render('auth/login');
}

function handleLogin(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  user.login(email, password)
      .then(theUser => {
        res.redirect('/tweets');
        res.locals.user = theUser
      })
    .catch((err) => {
      console.log(err);
      res.redirect('/auth/login');
    })
}

function renderRegister(req, res) {
  res.render('auth/register');
}

function handleRegister(req, res, next) {

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  user.register(username, email, password)
    .then((newUser) => {
      user.login(email, password)
      .then(theUser => {
        res.redirect('/tweets');
        res.send(req.user);
      })
      })
    .catch((err) => {
      console.log(err);
      res.redirect('/auth/login');
    })
}

module.exports = {
  renderLogin,
  handleLogin,
  renderRegister,
  handleRegister,
};
