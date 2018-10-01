'use strict';

let exercise = require('workshopper-exercise')()
let filecheck = require('workshopper-exercise/filecheck')
let execute = require('workshopper-exercise/execute')
let comparestdout = require('workshopper-exercise/comparestdout')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
