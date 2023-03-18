'use strict'


const vm = require('node:vm');
const fs = require('node:fs')

const RUN_OPTIONS = { timeout: 5000, displayErrors: true };

/**
 * @param {string} filename
 * @param {any} sandbox
 */
module.exports = (filename, sandbox) => {
   const code = fs.readFileSync(filename, 'utf-8')
   const script = new vm.Script(code, { filename });
   const context = vm.createContext(Object.freeze({ ...sandbox }));
   const exported = script.runInContext(context, { ...RUN_OPTIONS, filename });
   return exported;
};
