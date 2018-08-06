const users = require('../models/usersModel');

function renderUsers(req, res, next) {
    users.getAllUsers()
        .then(users => {
            console.log(users);
            res.locals.users = users;
            res.render('auth/users', {
                data: res.locals.users
            })
        })
}

module.exports = {
    renderUsers
}