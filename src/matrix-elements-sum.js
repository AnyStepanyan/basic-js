const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  let rows = matrix;
  let result = [];

  for(i = 0; i < rows.length; i++) {
      for(j = 0; j < rows[0].length; j++) {
          if(rows[i][j] === 0 && i < rows.length - 1) {
              rows[i+1][j] = 0;
          } else if (rows[i][j] !== 0){
              result.push(rows[i][j]);
          }
      }
  }
  return result.reduce((sum,val) => {
      return sum + val;
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};
