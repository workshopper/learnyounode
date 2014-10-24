var fs            = require('fs')
  , path          = require('path')
  , os            = require('os')
  , rimraf        = require('rimraf')
  , exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , wrappedexec   = require('workshopper-wrappedexec')
  , boganipsum    = require('boganipsum')

  , testFile      = path.join(os.tmpDir(), '_learnyounode_' + process.pid + '.txt')


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

  var lines = Math.ceil(Math.random() * 50)
    , txt   = boganipsum({ paragraphs: lines })

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
  var usedSync  = false
    , usedAsync = false

  Object.keys(exercise.wrapData.fsCalls).forEach(function (m) {
    if (/Sync$/.test(m)) {
      usedSync = true
      this.emit('fail', 'Used synchronous method: fs.' + m + '()')
    } else {
      usedAsync = true
      this.emit('pass', 'Used asynchronous method: fs.' + m + '()')
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
