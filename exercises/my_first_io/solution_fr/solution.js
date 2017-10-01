const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// remarquez que vous pouvez éviter d’avoir à appeler `.toString()`
// en précisant un encodage 'utf8' comme second argument pour
// `readFileSync`, ce qui vous renverrait une `String`!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
