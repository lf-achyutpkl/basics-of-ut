module.exports = {
  get: jest.fn(() => Promise.resolve({ id: 1, title: 'Hello World' }))
};
