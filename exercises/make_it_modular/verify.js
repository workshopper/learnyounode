const fs = require('fs')
const path = require('path')
const util = require('util')
const files = require('../filtered_ls/file-list')

function validateModule (modFile, callback) {
  const exercise = this
  const __ = this.__
  const __n = this.__n
  const dir = this._testDir
  let mod
  const error = new Error('testing')
  let returned = false
  const _callback = callback
  let callbackUsed

  try {
    mod = require(modFile)
  } catch (e) {
    exercise.emit('fail', __('fail.loadError', { message: e.message, path: path.basename(modFile) }))
    return callback(null, false)
  }

  callback = function () {
    returned = true
    _callback.apply(this, arguments)
  }

  function modFileError (txt) {
    exercise.emit('fail', __('fail.mod._base', { path: path.basename(modFile), message: txt }))
    callback(null, false)
  }

  // ---- Check that our module file is `module.exports = function () {}`

  if (typeof mod !== 'function') {
    return modFileError(__('fail.mod.no_export'))
  }

  exercise.emit('pass', __('pass.singleFunction'))

  // ---- Check that the function exported takes 3 arguments

  if (mod.length < 3) {
    return modFileError(__n('fail.mod.arguments', mod.length))
  }

  exercise.emit('pass', __n('pass.arguments', mod.length))

  // ---- Mock `fs.readdir` and check that an error bubbles back up through the cb

  fs.$readdir = fs.readdir
  fs.readdir = function (dir, optionalEncoding, callback) {
    callback = callback || optionalEncoding
    callback(error)
  }

  function noerr () {
    return modFileError(__('fail.mod.missing_error'))
  }

  callbackUsed = false
  try {
    mod('/foo/bar/', 'wheee', function (err) {
      if (err !== error) {
        return noerr()
      }

      callbackUsed = true
    })
  } catch (e) {
    noerr()
  }

  if (callbackUsed) {
    exercise.emit('pass', __('pass.error'))
  }

  // ---- Check whether the callback is used at all

  setTimeout(function () {
    if (returned) {
      return
    }

    if (!callbackUsed) {
      return modFileError(__('fail.mod.missing_callback'))
    }

    exercise.emit('pass', __('pass.callback'))

    // replace the mock readdir
    fs.readdir = fs.$readdir

    callbackUsed = false

    // a special follow-up for when we detect they are not passing back
    // the right number of elements--the most common case is that they are
    // sending in the '.'-prefixed value
    function checkWithDot () {
      mod(dir, '.dat', function (err, list) {
        if (err) {
          return modFileError(__('fail.mod.callback_error', { error: util.inspect(err) }))
        }
        const notexp = files.filter(function (f) { return (/\.dat$/).test(f) })
        if (list.length === notexp.length) {
          return modFileError(__('fail.mod.dont_use_dot'))
        }

        exercise.emit('pass', __('pass.dont_use_dot'))
        // else ... no idea what went wrong here!
        modFileError(__('fail.mod.array_wrong_size'))
      })
    }

    try {
      mod(dir, 'md', function (err, list) {
        if (err) {
          return modFileError(__('fail.mod.callback_error', { error: util.inspect(err) }))
        }

        // ---- Check that we got the correct number of elements
        if (arguments.length < 2) {
          return modFileError(__n('fail.mod.callback_arguments', arguments.length))
        }

        exercise.emit('pass', __('pass.callback_arguments'))

        // ---- Check that we got an Array as the second argument
        if (!Array.isArray(list)) {
          return modFileError(__('fail.mod.missing_array_argument'))
        }

        exercise.emit('pass', __('pass.array_argument'))

        const exp = files.filter(function (f) { return (/\.md$/).test(f) })
        const noDotExp = files.filter(function (f) { return (/md$/).test(f) })
        let i

        // ---- Check for `ext` instead of `.ext`
        if (noDotExp.length === list.length) {
          return modFileError(__('fail.mod.dotExt'))
        }

        // ---- Check that we got the expected number of elements in the Array
        if (exp.length !== list.length) {
          return checkWithDot()
        }

        exercise.emit('pass', __('pass.dont_use_dot'))
        exercise.emit('pass', __('pass.array_size'))

        callbackUsed = true

        // ---- Check that the elements are exactly the same as expected (ignoring order)
        exp.sort()
        list.sort()
        for (i = 0; i < exp.length; i++) {
          if (list[i] !== exp[i]) {
            return modFileError(__('fail.mod.array_comparison'))
          }
        }

        exercise.emit('pass', __('pass.final'))

        // WIN!!
        callback()
      })
    } catch (e) {
      return modFileError(__('fail.mod.unexpected', { error: util.inspect(e) }))
    }

    setTimeout(function () {
      if (returned) {
        return
      }

      if (!callbackUsed) {
        return modFileError(__('fail.mod.timeout'))
      }
    }, 300)
  }, 300)
}

// find any modules that are required by the submission program

function requires (exercise) {
  // rule out these 4 things
  const main = path.resolve(process.cwd(), exercise.args[0])
  const exec = require.resolve('workshopper-wrappedexec/exec-wrap')
  const wrap1 = require.resolve('../my_first_io/wrap')
  const wrap2 = require.resolve('./wrap-requires')

  return exercise.wrapData.requires.filter(function (m) {
    return m !== main && m !== exec && m !== wrap1 && m !== wrap2
  })
}

function verifyModuleUsed (callback) {
  const required = requires(this)

  if (required.length === 0) {
    this.emit('fail', this.__('fail.missing_module'))
    return callback(null, false)
  }
  validateModule.call(this, required[required.length - 1], callback)
}

function verify (callback) {
  Object.keys(this.wrapData.fsCalls).forEach(function (m) {
    if (/Sync$/.test(m)) {
      this.emit('fail', this.__('fail.sync', { method: 'fs.' + m + '()' }))
    } else {
      this.emit('pass', this.__('pass.async', { method: 'fs.' + m + '()' }))
    }
  }.bind(this))

  verifyModuleUsed.call(this, callback)
}

module.exports = verify
