// Product code
const subtract = (a, b) => a - b;

// Arrange
const expected = 2;

// Act
const actual = subtract(5, 3);

// Assert
expect(actual).toBe(expected);

// Function/Tools for assertion. These methods are the friends that will help in each test forever.
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`FAIL: ${actual} is not equal to ${expected}`);
      } else {
        console.log(`FAIL: ${actual} is equal to ${expected}`);
      }
    },

    greaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`FAIL: ${actual} is not greater than ${expected}`);
      } else {
        console.log(`PASS: ${actual} is greater than ${expected}`);
      }
    }
  };
}
