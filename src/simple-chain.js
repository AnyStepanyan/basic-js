const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const error = "You can't remove incorrect link!"

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) === value &&
    !isNaN(parseInt(value, 10))
  )
}


let firstArr = []
let secondArr = []
let string = ""

const chainMaker = {

  getLength() {
    return firstArr.length
  },
  
  addLink(val) {
    if (val === null) {
      val = "null"
    }
    if (!val) {
      firstArr.push(` ( ) `)
      return this;
    } else {
      firstArr.push(` (${val.toString()}) `)
      return this
    }
  },

  removeLink(position) {
    if (
      !isInt(position) ||
      isNaN(position) ||
      !position ||
      position < 0 ||
      position > chainMaker.getLength()
    ) {
      throw new Error(error)
    }
    secondArr = [...firstArr]
    secondArr[position] = "del"
    firstArr = [];
    secondArr.forEach((deleteVal) => {
      if (deleteVal !== "del") {
        firstArr.push(deleteVal);
      }
    })
  },

  reverseChain() {
    firstArr.reverse()
     return this
  },

  finishChain() {
    let joint = [...firstArr]
    string = joint.join("~~")
    return string
  }
}


module.exports = {
  chainMaker
};
