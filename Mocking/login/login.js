const loginService = require('./loginService');

function login(username, password) {
  if (username === '') {
    return 'Username cannot be empty';
  }

  if (password === '') {
    return 'Password cannot be empty';
  }

  if (password && password.length < 3) {
    return 'Password length cannot be less than 3';
  }

  const user = loginService.getUser(username, password);

  if (user) {
    return user;
  }

  return 'Invalid Credentials';
}

module.exports = login;
