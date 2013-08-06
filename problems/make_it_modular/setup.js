const fs        = require('fs')
    , path      = require('path')
    , os        = require('os')
    , onlyAsync = require('../../lib/verify-calls').verifyOnlyAsync
    , requires  = require('../../lib/fetch-requires')
    , bold = require('../../bin/term-util').bold
    , red  = require('../../bin/term-util').red

    , files = [
          'learnyounode.dat'
        , 'learnyounode.txt'
        , 'learnyounode.sql'
        , 'api.html'
        , 'README.md'
        , 'CHANGELOG.md'
        , 'LICENCE.md'
        , 'md'
        , 'data.json'
        , 'data.dat'
        , 'words.dat'
        , 'w00t.dat'
        , 'w00t.txt'
        , 'wrrrrongdat'
      ]

function verify (trackFile, callback) {
  onlyAsync(trackFile, function (err) {
    if (err)
      return callback(err)

    requires(trackFile, function (err, main, required) {
      if (err)
        return callback(err)

      if (required.length > 1)
        return callback() // win!

      console.log('\nYou got the correct answer but only used ' + bold('one') + ' file:')
      console.log('\t' + bold(red(required[0])))
      console.log(
          '\nThis problem requires you to use at least '
        + bold('one additional')
        + ' module file.\n'
      )
      callback('bzzt!')
    })
  })
}

module.exports = function () {
  var dir       = path.join(os.tmpDir(), 'learnyounode_' + process.pid)
    , trackFile = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.json')

  fs.mkdirSync(dir)
  files.forEach(function (f) {
    fs.writeFileSync(path.join(dir, f), 'nothing to see here', 'utf8')
  })

  return {
      args        : [ dir, 'md' ]
    , stdin       : null
    , modUseTrack : trackFile
    , verify      : verify.bind(null, trackFile)
  }
}