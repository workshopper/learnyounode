var fs = require('fs')
var path = require('path')

// call readdir with optional encoding parameter
module.exports = function (directory, filter, callback) {
  filter = '.' + filter
  fs.readdir(directory, 'utf8', function (error, list) {
    if (error) {
      return callback(error)
    }

    callback(null, list.filter(function (entry) {
      return path.extname(entry) === filter
    }))
  })
}
