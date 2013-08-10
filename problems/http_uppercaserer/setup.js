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
    , count   = 0
    , iv

  setTimeout(function () {
    inputA.pipe(hyperquest.post('http://localhost:8000')).pipe(outputA)
    if (!run)
      inputB.pipe(hyperquest.post('http://localhost:8001')).pipe(outputB)
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
      args: []
    , a: duplexer(inputA, outputA)
    , b: duplexer(inputB, outputB)
  }
}