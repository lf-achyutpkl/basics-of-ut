const getDivision = require('./result_updated');

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

test('100 percentage is distinction', () => {
  const percentage = 100;
  const expectedDivision = 'Distinction';

  const actualDivision = getDivision(percentage);

  expect(actualDivision).toBe(expectedDivision);
});

test('50 percentage is second division', () => {
  const percentage = 50;
  const expectedDivision = 'Second Division';

  const actualDivision = getDivision(percentage);

  expect(actualDivision).toBe(expectedDivision);
});

test('49.9 percentage is third division', () => {
  const percentage = 49.9;
  const expectedDivision = 'Third Division';

  const actualDivision = getDivision(percentage);

  expect(actualDivision).toBe(expectedDivision);
});

test('should throw invalid data exception', () => {
  const percentage = -1;

  expect(() => getDivision(percentage)).toThrow('invalid data');
});
