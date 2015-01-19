var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) 使ってもいいです
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})