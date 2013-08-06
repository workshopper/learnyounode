module.exports = function (dir, filter, callback) {
  var fs = require('fs')
  var regex = new RegExp('\\.' + process.argv[3] + '$')

  fs.readdir(process.argv[2], function (err, list) {
    if (err)
      return callback(err)
    list = list.filter(function (file) {
      return regex.test(file)
    })
    callback(null, list)
  })
}