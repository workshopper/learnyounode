var http = require('http')
var bl = require('bl')
var len = process.argv.length - 2 //a little more dynamic
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < len; i++) //len = process.argv.length - 2
    console.log(results[i])
}

function httpGet (index) { //This gets called from httpGet(i) line 28
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString() //Put response in results array
      count++

      if (count == len) //len = process.argv.length - 2
        printResults()
    }))
  })
}

for (var i = 0; i < len; i++) //len = process.argv.length - 2
  httpGet(i)
