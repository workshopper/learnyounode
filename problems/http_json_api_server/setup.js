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

  setTimeout(function () {
    fetch(8000).pipe(outputA)
    if (!run)
      fetch(8001).pipe(outputB)
  }, 500)

  return {
      args : []
    , a    : outputA
    , b    : outputB
    , long : true
  }
}
