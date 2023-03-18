'use strict'

const fs = require('node:fs')

console.log(fs.readFileSync(__dirname + '/fs-1.js', { encoding: 'utf-8' }));
