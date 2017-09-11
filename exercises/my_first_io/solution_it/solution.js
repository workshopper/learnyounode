const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// Nota che puoi omettere il .toString() passando 'utf8' come
// secondo argomento a readFileSync, e otterrai un risultato String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
