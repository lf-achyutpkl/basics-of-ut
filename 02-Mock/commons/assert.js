// Function/Tools for assertion. These methods are the friends that will help in each test forever.
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    notToBe(expected) {
      if (actual === expected) {
        throw new Error(`${actual} is equal to ${expected}`);
      }
    },

    greaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not greater than ${expected}`);
      }
    }
  };
}

module.exports = expect;
