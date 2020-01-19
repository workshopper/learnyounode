const fs = require('fs')

fs.readFile(process.argv[2], countNewLines)

function countNewLines (error, text) {
  if (error) {
    return console.error(error)
  }

  const lineCount = text.toString().split('\n').length - 1
  console.log(lineCount)
}
