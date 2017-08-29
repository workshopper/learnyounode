var results = []
var count = 0

function printResults () {
  results.forEach(function (data) {
    console.log(data)
  })
}

function httpGet (index) {
  require('http').get(process.argv[2 + index], function (response) {
    response.pipe(require('bl')(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results.push(data.toString())

      if (++count > 2) {
        printResults()
      }
    }))
  })
}

for (var i = 2; i > 0; i--) {
  setTimeout(httpGet.bind(null, i), 3 - i * 500)
}
