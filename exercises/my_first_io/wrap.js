const fs = require('fs')
const fsp = fs.promises
const util = require('util')

function wrap (ctx) {
  ctx.fsCalls = {}
  wrapFsCalls(ctx, fs, 'fs')
  if (fsp) wrapFsCalls(ctx, fsp, 'fsp')
  if (util) wrapFsCalls(ctx, util, 'util')
}

function wrapFsCalls (ctx, fs, objectName) {
  // wrap app fs calls
  Object.keys(fs).forEach(function (m) {
    const orig = fs[m]

    fs[m] = function () {
      // $captureStack is a utility to capture a stacktrace array
      const stack = ctx.$captureStack(fs[m])

      // inspect the first callsite of the stacktrace and see if the
      // filename matches the mainProgram we're running, if so, then
      // the user has used the method in question
      // the substring() is necessary as the user doesn't have to provide
      // a .js extension to make it work

      if (stack[0].getFileName().substring(0, ctx.mainProgram.length) === ctx.mainProgram) {
        if (!ctx.fsCalls[m]) {
          ctx.fsCalls[m] = 1
        } else {
          ctx.fsCalls[m]++
        }

        // setup object name in ctx
        ctx.objectName = objectName
      }

      // call the real fs.readFileSync
      return orig.apply(this, arguments)
    }
  })
}

module.exports = wrap
