'use strict'
const http = require('http')
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')
const bogan = require('boganipsum')
const after = require('after')

// three separate chunks of words to spit out
const words = [
  bogan({ paragraphs: 1, sentenceMax: 1 }).split(' '),
  bogan({ paragraphs: 1, sentenceMax: 1 }).split(' '),
  bogan({ paragraphs: 1, sentenceMax: 1 }).split(' ')
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
function writeWords (i, delay, res) {
  setTimeout(function () {
    (function next (j) {
      if (j === words[i].length) {
        return res.end()
      }
      res.write(words[i][j] + ' ')
      // use setTimeout to slow down the output to test timing
      setTimeout(next.bind(null, j + 1), 2)
    }(0))
  }, delay)
}

// shuffle an array of elements in JavaScript to randomize the range.
// taken from http://stackoverflow.com/a/6274398/962452
function shuffle (array) {
  let counter = array.length
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter)
    // Decrease counter by 1
    counter--
    // And swap the last element with it
    const temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
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

  const done = after(3, function (err) {
    if (err) {
      return callback(err)
    }

    // give the 3 server urls as cmdline args to the child processes
    const args = this.servers.map(function (s) {
      return 'http://localhost:' + s.address().port
    })

    this.submissionArgs = args
    this.solutionArgs = args

    callback()
  }.bind(this))

  let times = []
  times.push(1 + Math.random() * 100)
  times.push(times[0] + 100 + Math.random() * 100)
  times.push(times[1] + 100 + Math.random() * 100)
  times = shuffle(times)

  this.servers = [
    server(0, times[0], done),
    server(1, times[1], done),
    server(2, times[2], done)
  ]
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  if (!this.servers) {
    return process.nextTick(callback)
  }

  // close all 3 servers
  const done = after(3, callback)
  this.servers.forEach(function (s) {
    s.close(done)
  })
})

module.exports = exercise
