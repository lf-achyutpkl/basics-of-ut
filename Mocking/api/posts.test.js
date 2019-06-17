const getPosts = require('./posts');
const mockedAxios = require('axios');

test('should return valid post', async function() {
  const expectedResponse = { id: 1, title: 'Hello World' };

  const actualResponse = await getPosts();

  expect(actualResponse).toEqual(expectedResponse);
});

test('should return list of posts', async function() {
  const RESPONSE_DATA = [
    { id: 1, title: 'One' },
    { id: 2, title: 'Two' },
    { id: 3, title: 'Three' }
  ];

  const expectedResponse = [...RESPONSE_DATA];
  mockedAxios.get.mockImplementationOnce(() => Promise.resolve(RESPONSE_DATA));

  const actualResponse = await getPosts();

  expect(actualResponse).toEqual(expectedResponse);
});

test('should return list of posts with api hit check', async function() {
  const expectedResponse = { id: 1, title: 'Hello World' };
  mockedAxios.get.mockClear();

  const actualResponse = await getPosts();

  expect(actualResponse).toEqual(expectedResponse);
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
});
