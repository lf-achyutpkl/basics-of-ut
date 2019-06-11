function getDivision(percentage) {
  if (percentage < 0 || percentage > 100) {
    throw 'invalid data';
  }

  if (percentage < 30) {
    return 'Fail';
  } else if (percentage >= 30 && percentage < 50) {
    return 'Third Division';
  } else if (percentage >= 50 && percentage < 60) {
    return 'Second Division';
  } else if (percentage >= 60 && percentage < 80) {
    return 'First Division';
  } else if (percentage >= 80 && percentage <= 100) {
    return 'Distinction';
  }
}
module.exports = getDivision;
