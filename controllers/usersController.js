const users = require('../models/usersModel');

function renderUsers(req, res, next) {
    users.getAllUsers()
        .then(users => {
            res.locals.users = users;
            res.render('auth/users', {
                data: res.locals.users
            })
        })
}

function renderUserProfile(req, res, next) {
    let uid = req.params.id;
    users.getUserProfile(uid)
        .then(user => {
            res.locals.user = user;
                res.render('auth/profile', {
                    data: res.locals.user,
                })
            })
}

function renderUserTweets(req, res, next) {
    let uid = req.params.id;
    users.getTweetsByUid(uid)
        .then(tweets => {
            res.locals.tweets = tweets;
                res.render('partials/userTweets', {
                    tweets: res.locals.tweets,
                })
            })
}

module.exports = {
    renderUsers,
    renderUserProfile,
    renderUserTweets
}