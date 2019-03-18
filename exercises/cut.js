'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(word){
   let newWord = word.slice(2) ;
   return newWord
 }

 function cutLast(word1){
   let newWord1 = word1.slice(0, word1.length - 2) ;
   return newWord1
 }

 function cutFirstLast(word2){
  let newWord2 = word2.slice(2) ;
  let newWord3 = newWord2.slice(0, newWord2.length - 2) ;
  return newWord3
 }
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst('arguments'), 'guments')
assert.strictEqual(cutLast('cola'), 'co')
assert.strictEqual(cutFirstLast('tentative'), 'ntati')
// End of tests */
