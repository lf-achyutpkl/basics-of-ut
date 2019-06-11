const game = require('./game');
const utils = require('./utils');

test('player 1 should be winner', () => {
  const expectedWinner = 'Ram';
  utils.getWinner = jest.fn((p1, p2) => p1);

  const actualWinner = game('Ram', 'Hari');

  expect(actualWinner).toBe(expectedWinner);
});

test('player 2 should be winner', () => {
  const expectedWinner = 'Hari';
  utils.getWinner = jest.fn((p1, p2) => p2);

  const actualWinner = game('Ram', 'Hari');

  expect(actualWinner).toBe(expectedWinner);
});
