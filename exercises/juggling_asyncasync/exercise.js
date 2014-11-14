var http          = require('http')
  , exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , bogan         = require('boganipsum')
  , after         = require('after')

    // three separate chunks of words to spit out
  , words = [
        bogan({ paragraphs: 1, sentenceMax: 1 }).split(' ')
      , bogan({ paragraphs: 1, sentenceMax: 1 }).split(' ')
      , bogan({ paragraphs: 1, sentenceMax: 1 }).split(' ')
    ]


// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)


// write the words out to the client for this server, do it slowly
// and wait for `delay` until we start to make async handling a pain
function writeWords(i, delay, res) {
  setTimeout(function () {
    ;(function next (j) {
      if (j == words[i].length)
        return res.end()
      res.write(words[i][j] + ' ')
      // use setTimeout to slow down the output to test timing
      setTimeout(next.bind(null, j + 1), 2)
    }(0))
  }, delay)
}


// start a server to print `words[i]` after `delay`
function server (i, delay, callback) {
  return http.createServer(function (req, res) {
    writeWords(i, delay, res)
  }).listen(0, callback)
}


// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  var done = after(3, function (err) {
    if (err)
      return callback(err)

    // give the 3 server urls as cmdline args to the child processes
    var args = this.servers.map(function (s) {
      return 'http://localhost:' + s.address().port
    })

    this.submissionArgs = args
    this.solutionArgs   = args

    callback()
  }.bind(this))

  this.servers = [
      server(0, 200, done)
    , server(1, 0,   done)
    , server(2, 100,  done)
  ]

})


// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  // close all 3 servers
  var done = after(3, callback)
  this.servers.forEach(function (s) {
    s.close(done)
  })
})


module.exports = exercise
