const bcrypt = require('bcryptjs');
const db = require('../config/connection');

function register(username, email, password) {
  return bcrypt.hash(password, 8)
    .then((hash) => {
      return db.one(`
        INSERT INTO users (username, email, password_digest)
        VALUES ($/username/, $/email/, $/password_digest/)
        RETURNING *
      `, {
        username,
        email,
        password_digest: hash,
      });
    });
}

function findById(id) {
  return db.one(`
    SELECT * FROM users
    WHERE id = $1
  `, id);
}

function findByUsername(username) {
  return db.one(`
    SELECT * FROM users
    WHERE username = $1
  `, username);
}

function login(email, password) {
  return findByUsername(email)
    .then((user) => {
      return bcrypt.compare(password, user.password_digest)
        .then((res) => {
          if (!res) throw new Error('bad password');
          delete user.password_digest;
          return user;
        });
    })
    .catch(() => {
      throw new Error('Unauthorized');
    });
}

module.exports = {
  register,
  findById,
  findByUsername,
  login,
}