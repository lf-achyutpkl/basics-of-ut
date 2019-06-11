const USER_DB = [
  { id: 1, username: 'ram', password: 'ram123' },
  { id: 2, username: 'alex', password: 'alex123' },
  { id: 3, username: 'addul', password: 'abdul123' }
];

function getUser(username, password) {
  return USER_DB.find(
    user => user.username === username && user.password === password
  );
}

module.exports = getUser;
