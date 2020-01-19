const fs = require('fs')

countNewLines(fs.readFileSync(process.argv[2]))

function countNewLines (text) {
  const lineCount = text.toString().split('\n').length - 1
  console.log(lineCount)
}
