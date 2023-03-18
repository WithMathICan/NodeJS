'use strict'

const fs = require('node:fs')
const read = fs.readFileSync
fs.readFileSync = (a, b) => {
   console.log('INFORMATION FROM readFileSync: ', a, b)
   return read(a, b)
}