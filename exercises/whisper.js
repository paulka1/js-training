'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper = string => '/*' + string + '*/'


//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('papa'),'/*papa*/')
// End of tests */
