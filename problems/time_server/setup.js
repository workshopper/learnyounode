const through    = require('through')
    , net        = require('net')
    , bl         = require('bl')

module.exports = function (run) {
  var outputA = through()
    , outputB = through()

  function error (url, out, err) {
    out.write('Error connecting to ' + url + ': ' + err.message)
    out.end()
  }

  setTimeout(function () {
    var hqa
      , hqb

    hqa = net.connect(8000)
    hqa.on('error', error.bind(null, 'localhost:8000', outputA))
      .pipe(outputA)

    if (!run) {
      hqb = net.connect(8001)
      hqb.on('error', error.bind(null, 'localhost:8001', outputB))
        .pipe(outputB)
    }
  }, 500)

  return {
      args : []
    , a    : outputA
    , b    : outputB
  }
}