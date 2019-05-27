// Product code
const subtract = async (a, b) => a - b;

test('testSuccessWhenParametersAreValid', async () => {
  const expected = 2;

  const actual = await subtract(5, 3);

  expect(actual).toBe(expected);
});

// This acts like a main method for test.
async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ : ${title}`);
  } catch (error) {
    console.error(`✕ : ${title}: ${error}`);
  }
}

// Function/Tools for assertion. These methods are the friends that will help in each test forever.
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },

    greaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not greater than ${expected}`);
      }
    }
  };
}
