const user = require('../models/user');

function renderLogin(req, res) {
  res.render('auth/login');
}

function handleLogin(req, res) {
  const { email, password } = req.body;
  user.login(email, password)
    .then((theUser) => {
      res.redirect('/tweets');
      res.locals.user = theUser;
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/auth/login');
    });
}

function renderRegister(req, res) {
  res.render('auth/register');
}

function handleRegister(req, res) {
  const { email, password, username } = req.body;
  user.register(username, email, password)
    .then(() => {
      user.login(email, password)
        .then(() => {
          res.redirect('/tweets');
          res.send(req.user);
        });
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/auth/login');
    });
}

module.exports = {
  renderLogin,
  handleLogin,
  renderRegister,
  handleRegister,
};
