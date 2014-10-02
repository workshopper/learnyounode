var http          = require('http')
  , exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')

  , words = require('boganipsum')({ paragraphs: 2, sentenceMax: 1 }).split(' ')


// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)


// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  this.server = http.createServer(function (req, res) {
    // use setTimeout to slow down the output to test timing
    ;(function next (i) {
      if (i == words.length)
        return res.end()
      res.write(words[i] + ' ')
      setTimeout(next.bind(null, i + 1), 2)
    }(0))
  })

  this.server.on('error', function (err) {
    console.error('Unexpected error from HTTP server: %s', err.message)
    console.error(err.stack)
    process.exit(1)
  })

  this.server.listen(0, function () {
    var url = 'http://localhost:' + String(this.server.address().port)

    // give the url as the first cmdline arg to the child processes
    this.submissionArgs = [ url ]
    this.solutionArgs   = [ url ]

    callback()
  }.bind(this))
})


// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  if (!this.server)
    return process.nextTick(callback)

  this.server.close(callback)
})


module.exports = exercise
