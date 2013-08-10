const fs = require('fs')

var data = { calls: [] }
  , on   = true

function writeData (outfile) {
  try {
    fs.writeFileSync(outfile, JSON.stringify(data))
  } catch(e) {
    console.error('Internal error!', e)
  }
}

function track (outfile, fn, args, stack) {
  on = false
  var _args = Array.prototype.map.call(args, function (a) {
    if (typeof a == 'function')
      return '<Function>'
    if (Buffer.isBuffer(a))
      return '<Buffer>'
    return a
  })
  data.calls.push({ module: 'fs', fn: fn, args: _args, stack: stack })
  data.required = Object.keys(require.cache)
  writeData(outfile)
  on = true
}

function init (outfile) {
  data.argv = process.argv
  data.cwd  = process.cwd()
  writeData(outfile)

  Object.keys(fs).forEach(function (fn) {
    var err, stack

    if (typeof fs[fn] == 'function') {
      fs['__' + fn] = fs[fn]
      fs[fn] = function replacement () {
        try {
          err = new Error
          Error._prepareStackTrace = Error.prepareStackTrace
          Error.prepareStackTrace = function (err, stack) { return stack }
          Error.captureStackTrace(err, replacement)
          stack = err.stack.map(function (c) {
            return {
                type   : c.getTypeName()
              , fn     : c.getFunctionName()
              , method : c.getMethodName()
              , file   : c.getFileName()
              , line   : c.getLineNumber()
              , col    : c.getColumnNumber()
              , global : c.isToplevel()
              , native : c.isNative()
              , ctor   : c.isConstructor()
            }
          })
          Error.prepareStackTrace = Error._prepareStackTrace
        } catch (e) {}

        if (on) {
          //console.log('fs.' + fn, arguments[0])
          track(outfile, fn, arguments, stack)
        }
        return fs['__' + fn].apply(this, arguments)
      }
    }
  })
}

module.exports.init = init