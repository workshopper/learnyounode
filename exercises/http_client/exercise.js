'use strict'
const http = require('http')
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')

const words = require('boganipsum/clean_words')
  .sort(function () { return 0.5 - Math.random() })
  .slice(0, 10)

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
      if (i === words.length) {
        return res.end()
      }
      res.write(words[i].trim())
      setTimeout(next.bind(null, i + 1), 25)
    }(0))
  })

  this.server.listen(0, function () {
    const url = 'http://localhost:' + String(this.server.address().port)

    // give the url as the first cmdline arg to the child processes
    this.submissionArgs = [url]
    this.solutionArgs = [url]

    callback()
  }.bind(this))
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  if (!this.server) {
    return process.nextTick(callback)
  }

  this.server.close(callback)
})

module.exports = exercise
