const fs    = require('fs')
    , path  = require('path')
    , util  = require('util')
    , files = require('../filtered_ls/file-list')
    , chalk = require('chalk')

function validateModule (modFile, callback) {
  var exercise  = this
    , __        = this.__
    , __n       = this.__n
    , dir       = this._testDir
    , mod
    , error     = new Error('testing')
    , returned  = false
    , _callback = callback
    , callbackUsed

  try {
    mod = require(modFile)
  } catch (e) {
    exercise.emit('fail', __('fail.loadError', {message: e.message, path: path.basename(modFile)}))
    return callback(null, false)
  }

  callback = function () {
    returned = true
    _callback.apply(this, arguments)
  }

  function modFileError (txt) {
    exercise.emit('fail', __('fail.mod._base', {path: path.basename(modFile), message: txt}))
    callback (null, false)
  }

  //---- Check that our module file is `module.exports = function () {}`

  if (typeof mod != 'function')
    return modFileError(__('fail.mod.no_export', {method: chalk.bold(__('fail.mod.singleFunction'))}))

  exercise.emit('pass', __('pass.singleFunction'))

  //---- Check that the function exported takes 3 arguments

  if (mod.length < 3)
    return modFileError(__n('fail.mod.arguments', mod.length, {three: chalk.bold(__('fail.mod.arguments_three')), callback: chalk.bold(__('fail.mod.arguments_callback'))}))

  exercise.emit('pass', __n('pass.arguments', mod.length))

  //---- Mock `fs.readdir` and check that an error bubbles back up through the cb 

  fs.$readdir = fs.readdir
  fs.readdir = function (dir, callback) {
    callback(error)
  }

  function noerr () {
    modFileError(__('fail.mod.missing_error'))
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
    exercise.emit('pass', __('pass.error'))

  //---- Check whether the callback is used at all

  setTimeout(function () {
    if (returned)
      return

    if (!callbackUsed)
      return modFileError(__('fail.mod.missing_callback'))

    exercise.emit('pass', __('pass.callback'))

    // replace the mock readdir
    fs.readdir = fs.$readdir

    function compareArrays (a, b) {
      if (a.length != b.length) return false

      var a2 = (a != null) ? a.slice().sort() : new Array()
        , b2 = (b != null) ? b.slice().sort() : new Array()
        , length = a2.length > b2.length ? b2.length : a2.length

      for (var i = 0; i < length; i++) {
        if (a2[i] !== b2[i])
          return false
      }

      return true
    }

    callbackUsed = false
    try {

      mod(dir, 'md', function (err, list) {
        if (err) {
          return modFileError(__('fail.mod.callback_error', {error: util.inspect(err)}))
        }

        //---- Check that we got the correct number of elements
        if (arguments.length < 2) {
          return modFileError(__n('fail.mod.callback_arguments', arguments.length))
        }

        exercise.emit('pass', __('pass.callback_arguments'))

        //---- Check that we got an Array as the second argument
        if (!Array.isArray(list)) {
          return modFileError(__('fail.mod.missing_array_argument'))
        }

        exercise.emit('pass', __('pass.array_argument'))

        var exp = files.filter(function (f) { return (/\.md$/).test(f) })
          , noDotExp = files.filter(function(f) { return (/md$/).test(f) })
          , i

        //---- Check for `ext` instead of `.ext`
        if (noDotExp.length === list.length) {
          return modFileError(__('fail.mod.dotExt'))
        }

        //---- Check that we got the expected number of elements in the Array
        if (exp.length !== list.length) {
          return modFileError(__('fail.mod.array_wrong_size'))
        }

        //---- Check for 'ext' instead of '.ext'
        // N.B. This test complicates things as the remained of the function
        // now has to be called from the mod callback otherwise we can an
        // exception in workshopper-exercise/exercise.js
        // Exercise.prototype.process in the line
        // processors[i].call(self, mode, function (err, pass) {
        mod(dir, '.md', function (err, list) {
          if (compareArrays(exp, list)) {
            return modFileError(__('fail.mod.dotExt'))
          }

          exercise.emit('pass', __('pass.array_size'))

          callbackUsed = true

          //---- Check that the elements are exactly the same as expected (ignoring order)
          if (!compareArrays(exp, list)) {
            return modFileError(__('fail.mod.array_comparison'))
          }

          exercise.emit('pass', __('pass.final'))

          //WIN!!
          callback()
        })
      })
    } catch (e) {
      return modFileError(__('fail.mod.unexpected', {error: util.inspect(e)}))
    }

    setTimeout(function () {
      if (returned)
        return

      if (!callbackUsed)
        return modFileError(__('fail.mod.timeout'))
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
    this.emit('fail', this.__('fail.missing_module'))
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
      this.emit('fail', this.__('fail.sync', {method: 'fs.' + m + '()'}))
    } else {
      usedAsync = true
      this.emit('pass', this.__('pass.async', {method: 'fs.' + m + '()'}))
    }
  }.bind(this))

  verifyModuleUsed.call(this, callback)
}

module.exports = verify
