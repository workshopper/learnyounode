let fs = require('fs')

let contents = fs.readFileSync(process.argv[2])
let lines = contents.toString().split('\n').length - 1
console.log(lines)
