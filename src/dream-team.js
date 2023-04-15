const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false
  }
   let filteredMembers = []
  for(let i = 0; i < members.length; i++){
   if(typeof members[i] === 'string' && members[i] !== ''){
     filteredMembers.push(members[i])
   }
  }
   if(filteredMembers === []){
     return false
   }

  let  uppercaseMembers = filteredMembers.map(val => {
 return  val.replaceAll(' ','')[0].toUpperCase()
 })
  
 let sortedArr = uppercaseMembers.sort().join('')
  return sortedArr
}

module.exports = {
  createDreamTeam
};
