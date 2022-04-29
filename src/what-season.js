const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = 0) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (date === 0) {
    return 'Unable to determine the time of year!';
    }
  // } else if (!(date instanceof Date) || date.getMilliseconds() === 0) {
  //   throw new Error ('Invalid date!');
  // }

  try {
    if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
      return 'winter';
    } else if (date.getMonth() > 1 && date.getMonth() < 5) {
      return 'spring';
    } else if (date.getMonth() > 4 && date.getMonth() < 8) {
      return 'summer';
    } else if (date.getMonth() > 7 && date.getMonth() < 11) {
      return 'autumn';
    }
  } catch {
    throw new Error ('Invalid date!');
  }
}

module.exports = {
  getSeason
};
