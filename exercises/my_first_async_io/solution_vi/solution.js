var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // có thể sử dụng fs.readFile(file, 'utf8', callback) cũng được
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})