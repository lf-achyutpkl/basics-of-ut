function getDivision(percentage) {
  if (percentage < 30) {
    return 'Fail';
  } else if (percentage > 30 && percentage < 40) {
    return 'Third Division';
  } else if (percentage > 40 && percentage < 60) {
    return 'Second Division';
  } else if (percentage > 50 && percentage < 80) {
    return 'First Division';
  } else if (percentage > 80 && percentage < 100) {
    return 'Distinction';
  }
}
module.exports = getDivision;
