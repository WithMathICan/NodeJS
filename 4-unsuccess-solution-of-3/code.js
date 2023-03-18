
({
   start: async function start() {
      const p = pow3(3)
      console.log({ p });
      const src = fs.readFileSync(__dirname + '/index.js', 'utf-8')
      console.log({ src: src.substring(0, 11) });
      throw new Error('TEST')

      (async function () {
         const asyncSrc = await fs.promises.readFile(__dirname + '/index.js', 'utf-8')
         console.log({ asyncSrc: asyncSrc.substring(0, 11) });
      })()
   }
})
