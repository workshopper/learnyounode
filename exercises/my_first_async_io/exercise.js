'use strict'
const fs = require('fs')
const path = require('path')
const os = require('os')
const rimraf = require('rimraf')
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')
const wrappedexec = require('workshopper-wrappedexec')
const boganipsum = require('boganipsum')

const testFile = path.join(os.tmpdir(), '_learnyounode_' + process.pid + '.txt')

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

  const lines = Math.ceil(Math.random() * 50)
  const txt = boganipsum({ paragraphs: lines })

  // supply the file as an arg to the 'execute' processor for both
  // solution and submission spawn()
  // using unshift here because wrappedexec needs to use additional
  // args to do its magic
  this.submissionArgs.unshift(testFile)
  this.solutionArgs.unshift(testFile)

  // file with random text
  fs.writeFile(testFile, txt, 'utf8', callback)
})

// add a processor only for 'verify' calls
exercise.addVerifyProcessor(function (callback) {
  let usedSync = false
  let usedAsync = false

  Object.keys(exercise.wrapData.fsCalls).forEach(function (m) {
    const objectName = exercise.wrapData.objectName
    const method = `${objectName}.${m}()`
    if (/Sync$/.test(m)) {
      usedSync = true
      this.emit('fail', this.__('fail.sync', { method }))
    } else {
      usedAsync = true
      this.emit('pass', this.__('pass.async', { method }))
    }
  }.bind(this))

  callback(null, usedAsync && !usedSync)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  rimraf(testFile, callback)
})

module.exports = exercise
