var fs = require('fs')

fs.readFile(process.argv[2], countNewLines)

function countNewLines (error, text) {
  if (error) {
    return console.log(error)
  }
  var lineCount = text.toString().split('\n').length - 1
  console.log(lineCount)
}
