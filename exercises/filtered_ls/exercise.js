var fs = require('fs')
var path = require('path')
var os = require('os')
var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')
var wrappedexec = require('workshopper-wrappedexec')
var after = require('after')
var rimraf = require('rimraf')
var files = require('./file-list')

var testDir = path.join(os.tmpdir(), '_learnyounode_' + process.pid)

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// wrap up the child process in a phantom wrapper that can
// mess with the global environment and inspect execution
exercise = wrappedexec(exercise)

// a module we want run just prior to the submission in the
// child process
exercise.wrapModule(require.resolve('../my_first_io/wrap'))

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  // supply the dir and extensions as args to the 'execute' processor for both
  // solution and submission spawn()
  // using unshift here because wrappedexec needs to use additional
  // args to do its magic
  this.submissionArgs.unshift('md')
  this.submissionArgs.unshift(testDir)
  this.solutionArgs.unshift('md')
  this.solutionArgs.unshift(testDir)

  fs.mkdir(testDir, function (err) {
    if (err) {
      return callback(err)
    }

    var done = after(files.length, callback)

    files.forEach(function (f) {
      fs.writeFile(
        path.join(testDir, f)
        , 'nothing to see here'
        , 'utf8'
        , done
      )
    })
  })
})

// add a processor only for 'verify' calls
exercise.addVerifyProcessor(function (callback) {
  var usedSync = false
  var usedAsync = false

  Object.keys(exercise.wrapData.fsCalls).forEach(function (m) {
    if (/Sync$/.test(m)) {
      usedSync = true
      this.emit('fail', this.__('fail.sync', {method: 'fs.' + m + '()'}))
    } else {
      usedAsync = true
      this.emit('pass', this.__('pass.async', {method: 'fs.' + m + '()'}))
    }
  }.bind(this))

  if (!usedSync && !usedAsync) { // https://github.com/nodeschool/discussions/issues/356
    this.emit('fail', this.__('fail.unused'))
  }

  callback(null, usedAsync && !usedSync)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  rimraf(testDir, callback)
})

module.exports = exercise
