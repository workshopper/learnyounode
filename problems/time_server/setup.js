const through    = require('through')
    , net        = require('net')
    , bl         = require('bl')

module.exports = function () {
  var outputA = through()
    , outputB = through()

  setTimeout(function () {
    var hqa
      , hqb

    hqa = net.connect(8000)
    hqa.pipe(outputA)

    hqb = net.connect(8001)
    hqb.pipe(outputB)
  }, 500)

  return {
      args : []
    , a    : outputA
    , b    : outputB
  }
}