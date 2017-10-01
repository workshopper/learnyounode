const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // si può anche usare fs.readFile(file, 'utf8', callback)
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
