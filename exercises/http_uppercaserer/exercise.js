const through2 = require('through2')
const hyperquest = require('hyperquest')
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')
const rndport = require('../../lib/rndport')
const words = require('boganipsum/clean_words')
  .sort(function () { return 0.5 - Math.random() })
  .slice(0, 10)

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

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  const exercise = this

  function connect (port, stream) {
    const input = through2()
    let count = 0
    const url = 'http://localhost:' + port

    // TODO: test GET requests for #fail
    const req = input.pipe(hyperquest.post(url)
      .on('error', function (err) {
        exercise.emit(
          'fail'
          , exercise.__('fail.connection', { address: url, message: err.message })
        )
      }))

    req.pipe(stream)
    setTimeout(function () {
      stream.unpipe(req)
      stream.end()
    }, 5000)

    const iv = setInterval(function () {
      input.write(words[count].trim() + '\n')

      if (++count === words.length) {
        clearInterval(iv)
        input.end()
      }
    }, 50)
  }

  connect(this.submissionPort, this.submissionStdout)

  if (mode === 'verify') {
    connect(this.solutionPort, this.solutionStdout)
  }
}

module.exports = exercise
