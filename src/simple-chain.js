const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  getLength(){
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  },
  
  addLink(value) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },

  reverseChain() {
    resArr.reverse();
     return this
  },

  finishChain() {
    let tmp = [...resArr]
    resString = tmp.join("~~");
    return resString;
  }
};

module.exports = {
  chainMaker
};
