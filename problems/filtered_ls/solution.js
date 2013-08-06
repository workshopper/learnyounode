var fs = require('fs')
var regex = new RegExp('\\.' + process.argv[3] + '$')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (regex.test(file))
      console.log(file)
  })
})