const through    = require('through')
    , hyperquest = require('hyperquest')
    , duplexer   = require('duplexer')
    , words      = require('boganipsum/clean_words')
        .sort(function () { return 0.5 - Math.random() })
        .slice(0, 10)


module.exports = function (run) {
  var outputA = through()
    , outputB = through()
    , inputA  = through().pause()
    , inputB  = through().pause()
    , portA = 1024 + Math.floor(Math.random() * 64511)
    , portB = portA+1
    , count   = 0
    , iv

  function error (url, out, err) {
    out.write('Error connecting to ' + url + ': ' + err.message)
    out.end()
  }

  setTimeout(function () {
    inputA.pipe(hyperquest.post('http://localhost:' + portA)
      .on('error', error.bind(null, 'http://localhost:' + portA, outputA)))
        .pipe(outputA)
    if (!run) {
      inputB.pipe(hyperquest.post('http://localhost:' + portB)
        .on('error', error.bind(null, 'http://localhost:' + portB, outputB)))
          .pipe(outputB)
    }
  }, 500)

  iv = setInterval(function () {
    var w = words[count].trim() + '\n'
    inputA.write(w)
    inputB.write(w)

    if (++count == words.length) {
      clearInterval(iv)
      inputA.end()
      inputB.end()
    }
  }, 50)

  return {
      submissionArgs : [portA]
    , solutionArgs : [portB]
    , a: duplexer(inputA, outputA)
    , b: duplexer(inputB, outputB)
  }
}