var fs = require('fs')

countNewLines(fs.readFileSync(process.argv[2]))

function countNewLines (text) {
  var lineCount = text.toString().split('\n').length - 1
  console.log(lineCount)
}
