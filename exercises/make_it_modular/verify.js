const fs        = require('fs')
    , util      = require('util')
    , onlyAsync = require('workshopper/verify-calls').verifyOnlyAsync
    , requires  = require('workshopper/fetch-requires')
    , bold      = require('workshopper/term-util').bold
    , red       = require('workshopper/term-util').red
    , files     = require('../filtered_ls/file-list')

function validateModule (dir, trackFile, modfile, callback) {
  var mod       = require(modfile)
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

  //---- Check that our module file is `module.exports = function () {}`

  if (typeof mod != 'function') {
    return modfileError(
        'does not export a ' + bold('single function') + '.'
      + '\n\nYou must use the `module.exports = function () {}` pattern.'
    )
  }

  //---- Check that the function exported takes 3 arguments

  if (mod.length < 3) {
    return modfileError(
        'exports a function that takes fewer than ' + bold('three') + ' arguments.'
      + '\n\nYou must accept a directory, a filter and a ' + bold('callback') + '.'
    )
  }

  //---- Mock `fs.readdir` and check that an error bubbles back up through the cb 

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

  //---- Check whether the callback is used at all

  setTimeout(function () {
    if (returned)
      return

    if (!callbackUsed)
      return modfileError('did not call the callback argument.')

    // replace the mock readdir
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

        //---- Check that we got the correct number of elements
        if (arguments.length < 2) {
          return modfileError(
            'did not return two arguments on the callback function (expected `null` and an Array of filenames)'
          )
        }

        //---- Check that we got an Array as the second argument
        if (!Array.isArray(list)) {
          return modfileError(
            'did not return an Array object as the second argument of the callback'
          )
        }

        //---- Check that we got the expected number of elements in the Array
        var exp = files.filter(function (f) { return (/\.md$/).test(f) })
          , i

        if (exp.length !== list.length) {
          return modfileError(
            'did not return an Array with the correct number of elements as the second argument of the callback'
          )
        }

        callbackUsed = true

        //---- Check that the elements are exactly the same as expected (ignoring order)
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
}

function verifyModuleUsed (dir, trackFile, callback) {
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

    validateModule(dir, trackFile, modfile, callback)
  })
}

function verify (dir, trackFile, callback) {
  onlyAsync(trackFile, function (err) {
    if (err)
      return callback(err)

    verifyModuleUsed(dir, trackFile, callback)
  })
}

module.exports = verify