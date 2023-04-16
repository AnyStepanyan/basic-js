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
function repeater(str,  {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|' }) {
  str = String(str)
  let additionRepeat  = addition+ additionSeparator


  let additionToStr = str+ additionRepeat.repeat(additionRepeatTimes)

  
    if(additionToStr.endsWith(additionSeparator)){
    let cut = additionSeparator.length
    additionToStr = additionToStr.slice(0,additionToStr.length-cut )+separator
  
  }
let repeatedstr =  additionToStr.repeat(repeatTimes)
  if(repeatedstr.endsWith(separator)){
    repeatedstr = repeatedstr.slice(0,repeatedstr.length-separator.length )
  
  }
  return repeatedstr
  

}

module.exports = {
  repeater
};
