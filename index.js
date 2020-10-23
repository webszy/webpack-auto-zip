
module.exports = class done {
  constructor(arg) {
    this.zipFileName = arg || 'dist.zip'
  }
  apply(compiler) {
    // console.log('compiler: ', compiler.options.output.path);
    compiler.hooks.done.tap('done', () => {
      console.log('compiler done')
      const { makeZip } = require('./utils')
      try {
        makeZip(compiler.options.output.path,this.zipFileName)
      } catch (error) {
        console.log('error: ', error);
      }
    })
  }
}
