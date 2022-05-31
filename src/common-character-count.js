const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const [objS1, objS2] = [strToObj(s1), strToObj(s2)];

  function strToObj(str) {
    const obj = {};

    for (const symbol of str) {
      obj[symbol] ? obj[symbol]++ : obj[symbol] = 1;
    }

    return obj;
  }

  function findSymbols(objBig, objSmall) {
    let result = 0

    for (const key in objBig) {
      if (objSmall[key]) {
        result += Math.min(objBig[key], objSmall[key]);
      }
    }

    return result;
  }

  return Object.keys(objS1).length > Object.keys(objS2).length ? findSymbols(objS1, objS2) : findSymbols(objS2, objS1);
}

module.exports = {
  getCommonCharacterCount
};
