const fs        = require('fs')
    , path      = require('path')
    , os        = require('os')
    , util      = require('util')
    , onlyAsync = require('workshopper/verify-calls').verifyOnlyAsync
    , requires  = require('workshopper/fetch-requires')
    , bold      = require('workshopper/term-util').bold
    , red       = require('workshopper/term-util').red

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

    , dir       = path.join(os.tmpDir(), 'learnyounode_' + process.pid)
    , trackFile = path.join(os.tmpDir(), 'learnyounode_' + process.pid + '.json')


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

      var modfile   = required.filter(function (r) { return r != main })[0]
        , mod       = require(modfile)
        , error     = new Error('testing')
        , returned  = false
        , _callback = callback
        , callbackUsed

      callback = function () {
        returned = true
        _callback.apply(this, arguments)
      }

      function modfileError (txt) {
        console.log('\nYour additional module file:')
        console.log('\t' + modfile)
        console.log(txt + '\n')
        callback ('bzzt!')
      }

      if (typeof mod != 'function') {
        return modfileError(
            'does not export a ' + bold('single function') + '.'
          + '\n\nYou must use the `module.exports = function () {}` pattern.'
        )
      }

      if (mod.length < 3) {
        return modfileError(
            'exports a function that takes fewer than ' + bold('three') + ' arguments.'
          + '\n\nYou must accept a directory, a filter and a ' + bold('callback') + '.'
        )
      }

      fs.$readdir = fs.readdir
      fs.readdir = function (dir, callback) {
        callback(error)
      }

      function noerr () {
        modfileError(
            'does not appear to pass back an error received from `fs.readdir()`'
          + '\n\nUse the following idiomatic Node.js pattern inside your callback to `fs.readdir()`:'
          + '\n\tif (err)\n\t  return callback(err)'
        )
      }

      callbackUsed = false
      try {
        mod('/foo/bar/', 'wheee', function (err) {
          if (err !== error)
            return noerr()

          callbackUsed = true
        })
      } catch (e) {
        noerr()
      }

      setTimeout(function () {
        if (returned)
          return

        if (!callbackUsed)
          return modfileError('did not call the callback argument.')

        fs.readdir = fs.$readdir

        callbackUsed = false
        try {
          mod(dir, 'md', function (err, list) {
            if (err) {
              return modfileError(
                  'returned an error on its callback:'
                + '\n\t' + util.inspect(err)
              )
            }

            if (arguments.length < 2) {
              return modfileError(
                'did not return two arguments on the callback function (expected `null` and an Array of filenames)'
              )
            }

            if (!Array.isArray(list)) {
              return modfileError(
                'did not return an Array object as the second argument of the callback'
              )
            }

            var exp = files.filter(function (f) { return (/\.md$/).test(f) })
              , i

            if (exp.length !== list.length) {
              return modfileError(
                'did not return an Array with the correct number of elements as the second argument of the callback'
              )
            }

            callbackUsed = true

            exp.sort()
            list.sort()
            for (i = 0; i < exp.length; i++) {
              if (list[i] !== exp[i]) {
                return modfileError(
                  'did not return the correct list of files as the second argument of the callback.'
                )
              }
            }

            //WIN!!
            callback()
          })
        } catch (e) {
            return modfileError(
                'threw an error:'
              + '\n\t' + util.inspect(e)
            )
        }

        setTimeout(function () {
          if (returned)
            return

          if (!callbackUsed)
            return modfileError('did not call the callback argument.')
        }, 300)
      }, 300)
    })
  })
}

module.exports = function () {
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
