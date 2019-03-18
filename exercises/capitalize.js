'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */
/*
*let firstLetter = word.charAt(0) ;
* firstLetter = firstLetter.toUpperCase();
* console.log(firstLetter + newWord.slice(1))
*}
*/
const capitalize = (word) => {
  if (typeof word !== 'string') return ''
  let newWord = word.toLowerCase() ;
  return newWord.charAt(0).toUpperCase() + newWord.slice(1)
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
