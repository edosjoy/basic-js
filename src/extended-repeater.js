const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let repeaterString = '';

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    repeaterString += str;
    repeaterString += repeaterAddition(options.addition, options.additionRepeatTimes, options.additionSeparator);
    if (options.separator && i < options.repeatTimes - 1) {
      repeaterString += options.separator;
    }
    if (!options.separator && i < options.repeatTimes - 1) {
      repeaterString += '+';
    }
  }

  function repeaterAddition(adition, repeatTimes, separator) {
    if (typeof adition === 'undefined') {
      adition = '';
    }
    if (typeof repeatTimes === 'undefined') {
      repeatTimes = 1;
    }
    if (typeof separator === 'undefined') {
      separator = '|';
    }

    let resultStr = '';
    for (let i = 0; i < repeatTimes; i++) {
      resultStr += adition;
      if (i < repeatTimes - 1) {
        resultStr += separator;
      }
    }
    return resultStr;
  }

  return repeaterString;
}

module.exports = {
  repeater
};
