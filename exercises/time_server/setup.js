const through    = require('through')
    , net        = require('net')
    , bl         = require('bl')

module.exports = function (run) {
  var outputA = through()
    , outputB = through()
    , portA = 1024 + Math.floor(Math.random() * 64511)
    , portB = portA+1

  function error (url, out, err) {
    out.write('Error connecting to ' + url + ': ' + err.message)
    out.end()
  }

  setTimeout(function () {
    var hqa
      , hqb

    hqa = net.connect(portA)
    hqa.on('error', error.bind(null, 'localhost:' + portA, outputA))
      .pipe(outputA)

    if (!run) {
      hqb = net.connect(portB)
      hqb.on('error', error.bind(null, 'localhost:' + portB, outputB))
        .pipe(outputB)
    }
  }, 500)

  return {
      submissionArgs : [portA]
    , solutionArgs : [portB]
    , a    : outputA
    , b    : outputB
  }
}