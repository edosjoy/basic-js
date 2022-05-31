const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const arrNum = n.toString().split('');
  const arrNumsWithoutOne = [];

  for (let i = 0; i < arrNum.length; i++) {
    const arr = [...arrNum];
    arr.splice(i, 1);
    arrNumsWithoutOne.push(+arr.join(''));
  }

  return Math.max(...arrNumsWithoutOne);
}

module.exports = {
  deleteDigit
};
