const assert = require('node:assert')
const { fn, obj, x } = require('./1.js')
require('./2.js')

assert.strict.deepStrictEqual(fn(obj.a, obj.b), obj.c)
console.log('TEST PASSED SUCCESSFULLY');