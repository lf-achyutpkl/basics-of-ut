const login = require('./login');
const loginService = require('./loginService');

const USERS = [
  { id: 1, username: 'ram', password: 'ram123' },
  { id: 2, username: 'alex', password: 'alex123' },
  { id: 3, username: 'addul', password: 'abdul123' }
];

describe('test valid login', () => {
  test('should return user', () => {
    // ARRANGE

    // mock
    loginService.getUser = jest.fn((username, password) => USERS[0]);
    const username = USERS[0].username;
    const password = USERS[0].password;
    const expectedResult = USERS[0];

    // ACT
    const actualResult = login(username, password);

    // ASSERT
    expect(actualResult).toEqual(expectedResult);
  });
});

describe('test in valid login', () => {
  test('should return invalid credentials', () => {
    // arrange
    loginService.getUser = jest.fn(
      (username, password) => 'Invalid Credentials'
    );
    const username = 'not_a_user';
    const password = USERS[0].password;
    const expectedResult = 'Invalid Credentials';

    // ACT
    const actualResult = login(username, password);

    // ASSERT
    expect(actualResult).toBe(expectedResult);
  });

  test('should return Username cannot be empty', () => {
    // arrange

    const username = '';
    const password = USERS[0].password;
    const expectedResult = 'Username cannot be empty';

    // ACT
    const actualResult = login(username, password);

    // ASSERT
    expect(actualResult).toBe(expectedResult);
  });
});
