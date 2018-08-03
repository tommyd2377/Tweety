const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
require('./config/passport');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello tweety!');
});

app.set('view engine', 'ejs');

app.use(flash());

app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/auth', authRouter);

app.listen(PORT, () => 
    console.log(`Tweety is listening on port ${PORT}, in ${app.get('env')} mode.`));

module.exports = app;