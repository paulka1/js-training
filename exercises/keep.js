'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = (word) => {
  return word.slice(0,2);
}

const keepLast = (word) => {
  return word.slice(word.length - 2, word.length);
}

const keepFirstLast = (word) => {
  return word.slice(2,4);
}


//* Begin of tests
const assert = require('assert')


assert.strictEqual(keepFirst('yopoulette'), 'yo')
assert.strictEqual(keepFirst('yocuit'), 'yo')
assert.strictEqual(keepLast('pouletteyo'), 'yo')
assert.strictEqual(keepLast('cuityo'), 'yo')
assert.strictEqual(keepFirstLast('yopouletteyo'), 'po')
assert.strictEqual(keepFirstLast('yocuityo'), 'cu')
// End of tests */
