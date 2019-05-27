const subtract = (a, b) => a - b;

const firstParameter = 5;
const secondParameter = 3;
const expected = 2;

const result = subtract(firstParameter, secondParameter);

if (result !== expected) {
  throw new Error(
    `FAIL: Difference of ${firstParameter} and ${secondParameter} is ${result}, which is not equal to ${expected}`
  );
} else {
  console.log(
    `PASS: Difference of ${firstParameter} and ${secondParameter} is ${result}, which is equal to ${expected}`
  );
}
