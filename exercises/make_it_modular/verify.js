const fs    = require('fs')
    , path  = require('path')
    , util  = require('util')
    , files = require('../filtered_ls/file-list')
    , chalk = require('chalk')

function validateModule (modFile, callback) {
  var exercise  = this
    , dir       = this._testDir
    , mod
    , error     = new Error('testing')
    , returned  = false
    , _callback = callback
    , callbackUsed

  try {
    mod = require(modFile)
  } catch (e) {
    exercise.emit('fail', 'Error loading module: ' + e.message)
    return callback(null, false)
  }

  callback = function () {
    returned = true
    _callback.apply(this, arguments)
  }

  function modFileError (txt) {
    exercise.emit('fail', 'Your additional module file [' + path.basename(modFile) + '] ' + txt)
    callback (null, false)
  }

  //---- Check that our module file is `module.exports = function () {}`

  if (typeof mod != 'function') {
    return modFileError(
        'does not export a ' + chalk.bold('single function') + '.'
      + 'You must use the `module.exports = function () {}` pattern.'
    )
  } else {
    exercise.emit('pass', 'Additional module file exports a single function')
  }

  //---- Check that the function exported takes 3 arguments

  if (mod.length < 3) {
    return modFileError(
        'exports a function that takes fewer than ' + chalk.bold('three') + ' arguments.'
      + 'You must accept a directory, a filter and a ' + chalk.bold('callback') + '.'
    )
  } else {
    exercise.emit('pass', 'Additional module file exports a function that takes ' + mod.length + ' arguments')
  }

  //---- Mock `fs.readdir` and check that an error bubbles back up through the cb 

  fs.$readdir = fs.readdir
  fs.readdir = function (dir, callback) {
    callback(error)
  }

  function noerr () {
    modFileError(
        'does not appear to pass back an error received from `fs.readdir()`'
      + 'Use the following idiomatic Node.js pattern inside your callback to `fs.readdir()`:'
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

  if (callbackUsed)
    exercise.emit('pass', 'Additional module file handles errors properly')

  //---- Check whether the callback is used at all

  setTimeout(function () {
    if (returned)
      return

    if (!callbackUsed)
      return modFileError('did not call the callback argument after an error from fs.readdir()')

    exercise.emit('pass', 'Additional module file handles callback argument')

    // replace the mock readdir
    fs.readdir = fs.$readdir

    callbackUsed = false
    try {
      mod(dir, 'md', function (err, list) {
        if (err) {
          return modFileError(
              'returned an error on its callback:'
            + '\n\t' + util.inspect(err)
          )
        }

        //---- Check that we got the correct number of elements
        if (arguments.length < 2) {
          return modFileError(
            'did not return two arguments on the callback function (expected `null` and an Array of filenames)'
          )
        }

        exercise.emit('pass', 'Additional module file returned two arguments on the callback function')

        //---- Check that we got an Array as the second argument
        if (!Array.isArray(list)) {
          return modFileError(
            'did not return an Array object as the second argument of the callback'
          )
        }

        exercise.emit('pass', 'Additional module file returned Array as second argument of the callback')

        var exp = files.filter(function (f) { return (/\.md$/).test(f) })
          , noDotExp = files.filter(function(f) { return (/md$/).test(f) })
          , i

        //---- Check for `ext` instead of `.ext`
        if (noDotExp.length === list.length) {
          return modFileError(
            'may be matching "ext" instead of ".ext"'
          )
        }

        //---- Check that we got the expected number of elements in the Array
        if (exp.length !== list.length) {
          return modFileError(
            'did not return an Array with the correct number of elements as the second argument of the callback'
          )
        }

        exercise.emit('pass', 'Additional module file returned correct number of elements as the second argument of the callback')

        callbackUsed = true

        //---- Check that the elements are exactly the same as expected (ignoring order)
        exp.sort()
        list.sort()
        for (i = 0; i < exp.length; i++) {
          if (list[i] !== exp[i]) {
            return modFileError(
              'did not return the correct list of files as the second argument of the callback'
            )
          }
        }

        exercise.emit('pass', 'Additional module file returned correct list of files as the second argument of the callback')

        //WIN!!
        callback()
      })
    } catch (e) {
        return modFileError(
            'threw an error:'
          + '\n\t' + util.inspect(e)
        )
    }

    setTimeout(function () {
      if (returned)
        return

      if (!callbackUsed)
        return modFileError('did not call the callback argument')
    }, 300)
  }, 300)
}


// find any modules that are required by the submission program

function requires (exercise) {
  // rule out these 4 things
  var main  = path.resolve(process.cwd(), exercise.args[0])
    , exec  = require.resolve('workshopper-wrappedexec/exec-wrap')
    , wrap1 = require.resolve('../my_first_io/wrap')
    , wrap2 = require.resolve('./wrap-requires')

  return exercise.wrapData.requires.filter(function (m) {
    return m != main && m != exec && m != wrap1 && m != wrap2
  })
}


function verifyModuleUsed (callback) {
  var required = requires(this)

  if (required.length === 0) {
    this.emit('fail', 'Did not use an additional module file, you must require() a module to help solve this exercise')
    return callback(null, false)
  }

  validateModule.call(this, required[0], callback)
}

function verify (callback) {
  var usedSync  = false
    , usedAsync = false

  Object.keys(this.wrapData.fsCalls).forEach(function (m) {
    if (/Sync$/.test(m)) {
      usedSync = true
      this.emit('fail', 'Used synchronous method: fs.' + m + '()')
    } else {
      usedAsync = true
      this.emit('pass', 'Used asynchronous method: fs.' + m + '()')
    }
  }.bind(this))

  verifyModuleUsed.call(this, callback)
}

module.exports = verify