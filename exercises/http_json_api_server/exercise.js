const through2 = require('through2')
const hyperquest = require('hyperquest')
const bl = require('bl')
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')
const rndport = require('../../lib/rndport')

const date = new Date(Date.now() - 100000)

// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
  this.submissionPort = rndport()
  this.solutionPort = this.submissionPort + 1

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

function normalizeJSON (data) {
  return JSON.stringify(JSON.parse(data))
}

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  const exercise = this

  function verify (port, stream) {
    function timeRequest (method, callback) {
      const url = `http://localhost:${port}/api/${method}?iso=${date.toISOString()}`

      function onData (err, _data) {
        if (err) {
          exercise.emit('fail', exercise.__('fail.connection', { address: url, message: err.message }))
        } else {
          let data = _data.toString()

          try {
            data = normalizeJSON(data.toString())
          } catch (e) {}

          stream.write(data + '\n')
        }

        callback()
      }

      return hyperquest.get(url).pipe(bl(onData))
    }

    timeRequest('parsetime', function () {
      timeRequest('unixtime', function () {
        stream.end()
      })
    })
  }

  verify(this.submissionPort, this.submissionStdout)
  if (mode === 'verify') {
    verify(this.solutionPort, this.solutionStdout)
  }
}

module.exports = exercise
