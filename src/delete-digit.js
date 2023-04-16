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
function deleteDigit(num) {
  let result = 0,
        numDigits = [];
    while (num) {
        numDigits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (let i = 0; i < numDigits.length; i++) {
        let n = 0;
        for (let i2 = numDigits.length - 1; i2 >= 0; i2--) {
            if (i !== i2) {
                n = n * 10 + numDigits[i2];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}

module.exports = {
  deleteDigit
};
