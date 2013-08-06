var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  var lines = contents.toString().split('\n').length
  console.log(lines)
})