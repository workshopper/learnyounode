var through2      = require('through2')
  , hyperquest    = require('hyperquest')
  , exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , rndport       = require('../../lib/rndport')
  , words         = require('boganipsum/clean_words')
                      .sort(function () { return 0.5 - Math.random() })
                      .slice(0, 10)


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

// add a processor to check GET failure case only for 'verify' calls
exercise.addVerifyProcessor(function (callback) {
  setTimeout(checkOnlyPost.bind(this, callback) , 500)
})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function checkOnlyPost (callback) {
    var exercise = this
      , url = 'http://localhost:' + this.submissionPort
      , verified = true

    hyperquest.get(url, function (err, res) {
      if (err) {
        exercise.emit(
            'fail'
          , exercise.__('fail.connection', {address: url, message: err.message})
        )
        return callback(null, false)
      }

      if (res.statusCode !== 405) {
        // 405 is Method Not Allowed
        exercise.emit('fail', exercise.__('fail.method'))
        verified = false;
      } else if (res.headers["allow"] !== "POST") {
        // 405 requres an appropriate Allow header
        exercise.emit('fail', exercise.__('fail.allow_post'))
        verified = false;
      }

      callback(null, verified)
    })
}

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  var exercise = this

  function connect (port, stream) {
    var input = through2()
      , count  = 0
      , iv
      , url = 'http://localhost:' + port

    input.pipe(hyperquest.post(url)
      .on('error', function (err) {
        exercise.emit(
            'fail'
          , exercise.__('fail.connection', {address: url, message: err.message})
        )
      }))
      .pipe(stream)

    iv = setInterval(function () {
      input.write(words[count].trim() + '\n')

      if (++count == words.length) {
        clearInterval(iv)
        input.end()
      }
    }, 50)

  }

  connect(this.submissionPort, this.submissionStdout)

  if (mode == 'verify')
    connect(this.solutionPort, this.solutionStdout)
}


module.exports = exercise
