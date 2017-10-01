const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) 使ってもいいです
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
