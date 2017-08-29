var fs = require('fs')
var path = require('path')
var os = require('os')
var through2 = require('through2')
var hyperquest = require('hyperquest')
var rimraf = require('rimraf')
var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')
var wrappedexec = require('workshopper-wrappedexec')
var rndtxt = require('boganipsum')({ paragraphs: 1, sentenceMax: 1 }) + '\n'
var testFile = path.join(os.tmpdir(), '_learnyounode_' + process.pid + '.txt')
var rndport = require('../../lib/rndport')

// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// add a processor for both run and verify calls, added *before*
// the comparestdout processor so we can mess with the stdouts
exercise.addProcessor(function (mode, callback) {
  this.submissionStdout.pipe(process.stdout)

  // replace stdout with our own streams
  this.submissionStdout = through2()
  if (mode === 'verify') {
    this.solutionStdout = through2()
  }

  setTimeout(query.bind(this, mode), 500)

  process.nextTick(function () {
    callback(null, true)
  })
})

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
  this.submissionPort = rndport()
  this.solutionPort = this.submissionPort + 1

  this.submissionArgs.unshift(testFile)
  this.submissionArgs.unshift(this.submissionPort)
  this.solutionArgs.unshift(testFile)
  this.solutionArgs.unshift(this.solutionPort)

  fs.writeFile(testFile, rndtxt, 'utf8', callback)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  rimraf(testFile, callback)
})

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  var exercise = this

  function connect (port, stream) {
    // TODO: introduce verification of content-type:text/plain and statusCode=200
    var url = 'http://localhost:' + port
    var req = hyperquest.get(url)
      .on('error', function (err) {
        exercise.emit(
          'fail'
          , exercise.__('fail.connection', {address: url, message: err.message})
        )
      })
    req.pipe(stream)
    setTimeout(function () {
      stream.unpipe(req)
      stream.end()
    }, 5000)
  }

  connect(this.submissionPort, this.submissionStdout)

  if (mode === 'verify') {
    connect(this.solutionPort, this.solutionStdout)
  }
}

// add a processor only for 'verify' calls
exercise.addVerifyProcessor(function (callback) {
  var exercise = this
  var badCalls = Object.keys(exercise.wrapData.fsCalls).filter(function (m) {
    exercise.emit('fail', exercise.__('fail.no_createReadStream', {method: 'fs.' + m + '()'}))
    return !(/createReadStream/).test(m)
  })

  callback(null, badCalls.length === 0)
})

module.exports = exercise
