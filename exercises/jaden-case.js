'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 const jadenCase = sentence => {
   let newSentence = sentence.split(" ");
   for(let i = 0; i < newSentence.length ; i++){
    newSentence[i] = newSentence[i].charAt(0).toUpperCase() + newSentence[i].slice(1,newSentence[i].length);     
    }
       return newSentence.join(' ')
  }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("You must write your own tests"), "You Must Write Your Own Tests")

// End of tests */
