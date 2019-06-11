function fetchData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ id: 1, name: 'Alex' });
    }, 1);
  });
}

function fetchDataWithError() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject({ status: 500, message: 'Internal Server Error' });
    }, 1);
  });
}

module.exports = { fetchData, fetchDataWithError };
