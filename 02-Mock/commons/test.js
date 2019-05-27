function test(title, callback) {
  try {
    callback();
    console.log(`✅ : ${title}`);
  } catch (error) {
    console.error(`✕ : ${title}: ${error}`);
  }
}

module.exports = test;
