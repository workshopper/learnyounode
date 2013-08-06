const boganipsum = require('boganipsum')
    , fs         = require('fs')
    , path       = require('path')
    , os         = require('os')
    , bold    = require('../../bin/term-util').bold
    , red     = require('../../bin/term-util').red

function verify (trackFile, callback) {
  var track   = require(trackFile)
    , fscalls = track.filter(function (call) {
        return call.module == 'fs'
          && call.stack[0].file != 'module.js'
          && call.stack[0].file != 'fs.js'
      })
    , sync = fscalls.filter(function (call) {
        return /Sync$/.test(call.fn)
      })

  if (!sync.length)
    return callback() // yay!

  console.log('\nYou got the correct answer but used the following ' + bold('synchronous') + ' calls:')
  sync.forEach(function (call) {
    console.log('\t' + bold(red('fs.' + call.fn + '()')))
  })
  console.log('\nThis problem requires you to only use ' + bold('asynchronous') + ' calls.\n')
  callback('bzzt!')
}

module.exports = function () {
  var lines     = Math.ceil(Math.random() * 50)
    , txt       = boganipsum({ paragraphs: lines })
    , file      = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.tmp')
    , trackFile = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.json')

  fs.writeFileSync(file, txt, 'utf8')

  return {
      args        : [ file ]
    , stdin       : null
    , modUseTrack : trackFile
    , verify      : verify.bind(null, trackFile)
  }
}