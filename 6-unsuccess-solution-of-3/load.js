'use strict'


const vm = require('node:vm');
const fs = require('node:fs')
const { createRequire } = require('node:module')

console.log(__dirname);
const myRequire = createRequire(__dirname + '/node_modules')

const vm2 = require('node:vm')
const vm3 = myRequire('node:vm')

console.log(vm === vm3);

const RUN_OPTIONS = { timeout: 5000, displayErrors: true };

/**
 * @param {string} filename
 * @param {any} sandbox
 */
module.exports = (filename, sandbox) => {
   const code = fs.readFileSync(filename, 'utf-8')
   const script = new vm.Script(code, { filename });
   const context = vm.createContext(Object.freeze({ 
      ...sandbox, 
      require: myRequire, 
   }));
   const exported = script.runInContext(context, { ...RUN_OPTIONS, filename });
   return exported;
};
