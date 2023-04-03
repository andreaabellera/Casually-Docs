import { resolve } from 'path'

module.exports = {
    root: 'src',
    build: {
      lib: {
        entry: resolve(__dirname, './casuallylibs.js'),
        name: 'CasuallyLibs',
        // the proper extensions will be added
        fileName: 'casuallylibs',
      },
      outDir: '../wwwroot/js'
    }
}