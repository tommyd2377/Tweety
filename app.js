const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const tweetsRouter = require('./routes/tweets');
const usersRouter = require('./routes/users');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
require('./config/passport');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello tweety!');
});

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(session({
    secret:            'tweety-secret',
    resave:            false,
    saveUninitialized: true,
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/tweets', tweetsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => 
    console.log(`Tweety is listening on port ${PORT}, in ${app.get('env')} mode.`));

module.exports = app;