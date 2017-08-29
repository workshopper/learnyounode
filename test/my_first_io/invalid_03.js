var fs = require('fs')

countNewLines(fs.readFileSync(process.argv[2]))

function countNewLines (text) {
  console.log(-1)
}
