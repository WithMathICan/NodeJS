'use strict'

const x = 5;

const fn = (a, b) => a + b

const obj = {
   a: 5,
   b: 6,
   c: 11,
}

module.exports = Object.freeze({x, fn, obj: Object.freeze(obj)})
