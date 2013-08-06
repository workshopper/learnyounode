const path = require('path')
    , bold = require('../bin/term-util').bold
    , red  = require('../bin/term-util').red

function verifyOnlyAsyncOrSync (sync, trackFile, callback) {
  var track   = require(trackFile)
    , fscalls = track.calls.filter(function (call) {
        return call.module == 'fs'
          && call.stack[0].file != 'module.js'
          && call.stack[0].file != 'fs.js'
      })
    , badCalls = fscalls.filter(function (call) {
        return sync != (/Sync$/).test(call.fn)
      })

  if (!badCalls.length)
    return callback() // yay!

  console.log(
      '\nYou got the correct answer but used the following '
    + bold((sync ? 'a' : '') + 'synchronous')
    + ' calls:'
  )
  badCalls.forEach(function (call) {
    console.log('\t' + bold(red('fs.' + call.fn + '()')))
  })
  console.log('\nThis problem requires you to only use ' + bold((sync ? '' : 'a') + 'synchronous') + ' calls.\n')
  callback('bzzt!')
}

module.exports.verifyOnlyAsync = verifyOnlyAsyncOrSync.bind(null, false)
module.exports.verifyOnlySync  = verifyOnlyAsyncOrSync.bind(null, true)