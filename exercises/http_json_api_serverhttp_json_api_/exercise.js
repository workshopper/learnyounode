var through2      = require('through2')
  , hyperquest    = require('hyperquest')
  , bl            = require('bl')
  , exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , rndport       = require('../../lib/rndport')

  , date          = new Date(Date.now() - 100000)


// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)


// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
  this.submissionPort = rndport()
  this.solutionPort   = this.submissionPort + 1

  this.submissionArgs = [ this.submissionPort ]
  this.solutionArgs   = [ this.solutionPort ]

  process.nextTick(callback)
})


// add a processor for both run and verify calls, added *before*
// the comparestdout processor so we can mess with the stdouts
exercise.addProcessor(function (mode, callback) {
  this.submissionStdout.pipe(process.stdout)

  // replace stdout with our own streams
  this.submissionStdout = through2()
  if (mode == 'verify')
    this.solutionStdout = through2()

  setTimeout(query.bind(this, mode), 500)

  process.nextTick(function () {
    callback(null, true)
  })
})


// compare stdout of solution and submission
exercise = comparestdout(exercise)


function normalizeJSON(data) {
  return JSON.stringify(JSON.parse(data))
}

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  var exercise = this

  function verify (port, stream) {
    function error (port, err) {
      exercise.emit(
          'fail'
        , 'Error connecting to http://localhost:' + port + ': ' + err.message
      )
    }

    hyperquest.get('http://localhost:' + port + '/api/parsetime?iso=' + date.toISOString())
      .on('error', error)
      .pipe(bl(function (err, data) {
        if (err)
          return stream.emit('error', err)

        stream.write(normalizeJSON(data.toString()) + '\n')

        hyperquest.get('http://localhost:' + port + '/api/unixtime?iso=' + date.toISOString())
          .on('error', error)
          .pipe(bl(function (err, data) {
            if (err)
              return stream.emit('error', err)

            stream.write(normalizeJSON(data.toString()) + '\n')
            stream.end()
          }))
      }))
  }

  verify(this.submissionPort, this.submissionStdout)

  if (mode == 'verify')
    verify(this.solutionPort, this.solutionStdout)
}


module.exports = exercise
