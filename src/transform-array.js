const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const resultArr = [...arr];
  let strIndex = [];

  resultArr.forEach((item, index) => {
    if (typeof item === 'string') {
      strIndex.push(index);
    }
  });


  strIndex.forEach(item => {
    switch (resultArr[item]) {
      case '--discard-next':
        if (typeof resultArr[item + 1] !== 'undefined') {
          delete resultArr[item];
          delete resultArr[item + 1];
        } else {
          delete resultArr[item];
        }
        break;
      case '--discard-prev':
        if (typeof resultArr[item - 1] !== 'undefined') {
          delete resultArr[item];
          delete resultArr[item - 1];
        } else {
          delete resultArr[item];
        }
        break;
      case '--double-next':
        if (typeof resultArr[item + 1] !== 'undefined') {
          resultArr.splice(item, 2, resultArr[item + 1], resultArr[item + 1]);
        } else {
          delete resultArr[item];
        }
        break;
      case '--double-prev':
        if (typeof resultArr[item - 1] !== 'undefined') {
          resultArr.splice(item - 1, 2, resultArr[item - 1], resultArr[item - 1]);
        } else {
          delete resultArr[item];
        }
        break;
    }
  });

  const rArr = [];

  [...resultArr].forEach(item => {
    if (typeof item !== 'undefined') {
      rArr.push(item);
    }
  });

  return rArr;
}

module.exports = {
  transform
};
