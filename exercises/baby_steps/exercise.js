'use strict'
const exercise = require('workshopper-exercise/basic')

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
