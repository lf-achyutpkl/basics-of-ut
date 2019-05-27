const getDivision = require('./result');

test('25 percentage is failed', () => {
  const percentage = 25;
  const expectedDivision = 'Fail';

  const actualDivision = getDivision(percentage);

  expect(actualDivision).toBe(expectedDivision);
});

test('65 percentage is first division', () => {
  const percentage = 65;
  const expectedDivision = 'First Division';

  const actualDivision = getDivision(percentage);

  expect(actualDivision).toBe(expectedDivision);
});

test('85 percentage is not first division', () => {
  const percentage = 85;
  const expectedDivision = 'First Division';

  const actualDivision = getDivision(percentage);

  expect(actualDivision).not.toBe(expectedDivision);
});
