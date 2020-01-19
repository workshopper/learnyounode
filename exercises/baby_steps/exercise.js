'use strict'
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// generate a random positive integer <= 100

function rndint () {
  return Math.ceil(Math.random() * 100)
}

exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  // create a random batch of cmdline args
  const args = [rndint(), rndint()]

  while (Math.random() > 0.3) {
    args.push(rndint())
  }

  // supply the args to the 'execute' processor for both
  // solution and submission spawn()
  this.submissionArgs = this.solutionArgs = args

  process.nextTick(callback)
})

module.exports = exercise
