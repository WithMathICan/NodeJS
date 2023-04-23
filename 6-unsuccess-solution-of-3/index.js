'use strict'

const load = require('./load')
const fs = require('node:fs')
// const { pow3 } = require('calc')

const exported = load(__dirname + '/code.js', {fs, console, __dirname})
console.log(exported);
exported.start()