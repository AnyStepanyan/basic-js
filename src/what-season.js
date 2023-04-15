const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  let boolean = !date instanceof Date
  if(boolean){
   return "Invalid date!"
 }
   if(date === 'winter' || 'spring' || 'summer' || 'autumn' || 'fall' ){
   return date
 }

 if(date.getMonth() === 11 || 0 || 1){
   return 'winter'
 }else if(date.getMonth() === 2 || 3 || 4){
   return 'spring'
 }else if(date.getMonth() === 5 || 6 || 7){
   return 'summer'
 }else if(date.getMonth() === 8 || 9 || 10){
   return 'autumn'
 }
}

module.exports = {
  getSeason
};
