const through    = require('through')
    , hyperquest = require('hyperquest')
    , bl         = require('bl')

    , date       = new Date(Date.now() - 100000)

function fetch (port) {
  var output = through()

  function error (err) {
    output.write('Error connecting to http://localhost:' + port + ': ' + err.message)
    output.end()
  }

  hyperquest.get('http://localhost:' + port + '/api/parsetime?iso=' + date.toISOString())
    .on('error', error)
    .pipe(bl(function (err, data) {
      if (err)
        return output.emit('error', err)
      output.write(data.toString() + '\n')

      hyperquest.get('http://localhost:' + port + '/api/unixtime?iso=' + date.toISOString())
        .on('error', error)
        .pipe(bl(function (err, data) {
          if (err)
            return output.emit('error', err)

          output.write(data.toString() + '\n')
          output.end()
        }))

    }))
  return output
}

module.exports = function (run) {
  var outputA = through()
    , outputB = through()
    , portA = 1024 + Math.floor(Math.random() * 64511)
    , portB = portA+1

  setTimeout(function () {
    fetch(portA).pipe(outputA)
    if (!run)
      fetch(portB).pipe(outputB)
  }, 500)

  return {
      submissionArgs : [portA]
    , solutionArgs : [portB]
    , a    : outputA
    , b    : outputB
    , long : true
  }
}
