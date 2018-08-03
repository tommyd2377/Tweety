const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userDB = require('../models/user');

/**
 * LocalStrategy will grab username and password from the request body
 * when the `passport.authorize('local') middleware is run and pass those values
 * to the callback we supply
 */
passport.use(new LocalStrategy((email, password, done) => (
  // Try to log the user in
  userDB.login(email, password)
    // if the login succeeds, pass the user object as the second argument to done
    .then(user => done(null, user))
    // if the login fails, pass false as the second argument to done
    .catch(err => done(null, false)))));

passport.serializeUser((user, done) => {
  // store the userId in the session
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // find the user by id from the id in the session
  userDB.findById(id)
    .then(user => done(null, user))
    // if there is an error, pass it as the first argument to done
    .catch(done);
});