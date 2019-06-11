const AsyncFunctions = require('./promise');
const fetchData = AsyncFunctions.fetchData;
const fetchDataWithError = AsyncFunctions.fetchDataWithError;

const SUCCESS_MESSAGE = { id: 1, name: 'Alex' };
const ERROR_MESSAGE = { status: 500, message: 'Internal Server Error' };

describe('resolving tests:', function() {
  // using then().catch()
  test('should resolve the promise using then()', function() {
    return fetchData().then(data => {
      expect(data).toEqual(SUCCESS_MESSAGE);
    });
  });

  // using async await
  test('should resolve the promise using async/await', async function() {
    const actualData = await fetchData();
    expect(actualData).toEqual(SUCCESS_MESSAGE);
  });

  // use of matcher resolves  ======== USE THIS METHOD ============ (remember to add return keyword)
  test('should resolve the promise with resolves', function() {
    return expect(fetchData()).resolves.toEqual(SUCCESS_MESSAGE);
  });

  // using async await and resolves
  test('should resolve the promise using async/await', async () => {
    await expect(fetchData()).resolves.toEqual(SUCCESS_MESSAGE);
  });
});

describe('rejecting tests:', function() {
  // using then().catch()
  test('should reject the promise using catch()', function() {
    return fetchDataWithError().catch(data => {
      expect(data).toEqual(ERROR_MESSAGE);
    });
  });

  // using async await
  test('should reject the promise using async/await', async function() {
    expect.assertions(1);

    try {
      await fetchDataWithError();
    } catch (actualData) {
      expect(actualData).toEqual(ERROR_MESSAGE);
    }
  });

  // use of matcher rejects ======== USE THIS METHOD ============ (remember to add return keyword)
  test('should reject the promise with rejects', function() {
    return expect(fetchDataWithError()).rejects.toEqual(ERROR_MESSAGE);
  });
});
