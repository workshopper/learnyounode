module.exports = function (dir, filter, callback) {
  var fs = require('fs')
  var regex = new RegExp('\\.' + filter + '$')

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return regex.test(file)
    })

    callback(null, list)
  })
}
