var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  if (err) {
    console.log(err)
  }
  list.filter(function (file) {
    return path.extname(file) === '.' + process.argv[3]
  }).forEach(function (file) {
    console.log(file)
  })
})
