'use strict'


const vm = require('node:vm');
const fs = require('node:fs')

const RUN_OPTIONS = { timeout: 5000, displayErrors: true };

/**
 * @param {any} sandbox
 * @param {string} filename
 */
module.exports = (sandbox, filename) => {
   const code = fs.readFileSync(filename)
   const script = new vm.Script(code, { filename });
   const context = vm.createContext(Object.freeze({ ...sandbox }));
   const exported = script.runInContext(context, { ...RUN_OPTIONS, filename });
   return exported;
};
