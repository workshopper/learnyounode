'use strict'
const net = require('net')
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')
const through2 = require('through2')
const rndport = require('../../lib/rndport')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// assign ports for the child processes to listen to
exercise.addSetup(function (mode, callback) {
  this.submissionPort = rndport()
  this.solutionPort = this.submissionPort + 1

  // set child process arguments
  this.submissionArgs = [this.submissionPort]
  this.solutionArgs = [this.solutionPort]

  process.nextTick(callback)
})

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

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  const exercise = this

  // on error, write to the stream so that'll also be verified

  // connect to localhost:<port> and pipe results to <stream>
  function connect (port, stream) {
    net.connect(port)
      .on('error', function (err) {
        stream.end()
        setImmediate(function () {
          exercise.emit(
            'fail'
            , exercise.__('fail.connection', { port: port, message: err.message })
          )
        })
      })
      .pipe(stream)
  }

  connect(this.submissionPort, this.submissionStdout)

  if (mode === 'verify') {
    connect(this.solutionPort, this.solutionStdout)
  }
}

module.exports = exercise
