const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: '',

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return this.chain.split('~~').length;
  },

  addLink(value = '') {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.chain += this.chain === '' ? `( ${value} )` : `~~( ${value} )`;
    return this;
  },

  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!Number.isInteger(position) || position < 1 || this.chain === '' || position >= this.chain.split('~~').length) {
      this.chain = '';
      throw new Error('You can\'t remove incorrect link!');
    } else {
      const arrChain = this.chain.split('~~');
      arrChain.splice(position - 1, 1);
      this.chain = arrChain.join('~~');
    }

    return this;
  },

  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.chain = this.chain.split('~~').reverse().join('~~');

    return this;
  },

  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    const result = this.chain;
    this.chain = '';

    return result;
  }
};

module.exports = {
  chainMaker
};
