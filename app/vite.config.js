import { resolve } from 'path'

module.exports = {
    root: 'src',
    build: {
      lib: {
        entry: resolve(__dirname, './casuallylibs.js'),
        name: 'CasuallyLibs',
        fileName: 'casuallylibs',
      },
      outDir: '../wwwroot/modules',
    }
}