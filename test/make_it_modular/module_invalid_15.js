module.exports = function () {
  var fs = require('fs')
  var path = require('path')
  var dir = process.argv[2]
  var fileExt = '.' + process.argv[3]
  var files = []

  function listFiles () {
    fs.readdir(dir, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === fileExt) {
          files.push(list[i])
        }
      }

      var answer = files.join('\n')

      console.log(answer)
    })
  }

  listFiles()
}
