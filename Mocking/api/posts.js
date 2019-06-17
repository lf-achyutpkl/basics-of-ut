const axios = require('axios');

const POST_API = 'https://jsonplaceholder.typicode.com/todos';

function getPosts() {
  return axios
    .get(POST_API)
    .then(data => data)
    .catch(e => {
      throw e;
    });
}

module.exports = getPosts;
