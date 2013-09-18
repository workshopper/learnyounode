const fs        = require('fs')
    , path      = require('path')
    , os        = require('os')
    , onlyAsync = require('workshopper/verify-calls').verifyOnlyAsync
    , requires  = require('workshopper/fetch-requires')
    , bold = require('workshopper/term-util').bold
    , red  = require('workshopper/term-util').red

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

      if (required.length == 1) {
        console.log('\nYou got the correct answer but only used ' + bold('one') + ' file:')
        console.log('\t' + bold(red(required[0])))
        console.log(
            '\nThis problem requires you to use '
          + bold('one additional')
          + ' module file.\n'
        )

        return callback('bzzt!')
      }

      var modfile = required.filter(function (r) { return r != main })[0]
        , mod     = require(modfile)

      if (typeof mod != 'function') {
        console.log('\nYour additional module file:')
        console.log('\t' + modfile)
        console.log('does not export a ' + bold('single function') + '.')
        console.log('\nYou must use the `module.exports = function () {}` pattern\n')

        return callback('bzzt!')
      }

      fs.$readdir = fs.readdir
      var error = new Error('testing')
      fs.readdir = function (dir, callback) {
        callback(error)
      }

      function noerr () {
        console.log('\nYour additional module file:')
        console.log('\t' + modfile)
        console.log('does not appear to pass back an error received from `fs.readdir()`')
        console.log('\nUse the following idiomatic Node.js pattern inside your callback to `fs.readdir()`:')
        console.log('\tif (err)\n\t  return callback(err)\n')

        return callback('bzzt!')        
      }

      try {
        mod('/foo/bar/', 'wheee', function (err) {
          if (err != error)
            return noerr()
          callback() // win!
        })
      } catch (e) {
        noerr()
      }
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
    , modUseTrack : {
          trackFile : trackFile
        , modules   : [ 'fs' ]
      }
    , verify      : verify.bind(null, trackFile)
  }
}