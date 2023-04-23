'use strict'

const { pow3 } = require('calc')
const load = require('./load')
const fs = require('node:fs')

const exported = load(__dirname + '/code.js', {fs, console, __dirname, pow3})
console.log({ exported });
exported.start()
