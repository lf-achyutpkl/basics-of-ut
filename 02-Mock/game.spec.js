const game = require('./game');
const utils = require('./utils');
const test = require('./commons/test');
const expect = require('./commons/assert');

const originalGetWinnerMethod = utils.getWinner;

test('testValidWinner', () => {
  utils.getWinner = (p1, p2) => p1;

  const winner = game('Ram', 'Shyam');
  expect(winner).toBe('Ram');

  // cleanup
  utils.getWinner = originalGetWinnerMethod;
});

test('testInvalidWinner', () => {
  utils.getWinner = (p1, p2) => p1;

  const winner = game('Ram', 'Shyam');
  expect(winner).notToBe('Shyam');

  // cleanup
  utils.getWinner = originalGetWinnerMethod;
});
