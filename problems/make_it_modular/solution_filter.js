var fs = require('fs')

module.exports = function (dir, filterStr, callback) {
  var regex = new RegExp('\\.' + filterStr + '$')

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return regex.test(file)
    })

    callback(null, list)
  })
}
