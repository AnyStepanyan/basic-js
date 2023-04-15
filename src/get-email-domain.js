const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email ) {
  let result = email.slice(email.indexOf('@')+1)
  return result.slice(result.indexOf('@')+1)
}

module.exports = {
  getEmailDomain
};
