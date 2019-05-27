const sum = require('./addition');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add 3 + 4 should be greater than 7', () => {
  expect(sum(3, 4)).toBeGreaterThan(6);
});

test('add 3 + 4 should be greater than 7', () => {
  expect(sum(3, 4)).toBeLessThanOrEqual(7);
});

test('add a + b should be greater than ab', () => {
  expect(sum('a', 'b')).toBe('ab');
});
