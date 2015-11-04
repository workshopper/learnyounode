var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// Nota che puoi omettere il .toString() passando 'utf8' come
// secondo argomento a readFileSync, e otterrai un risultato String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
