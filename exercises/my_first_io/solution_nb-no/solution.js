const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// Merk deg at du kan unngå kallet til .toString() ved å sende inn 'utf8' som det
// andre argumentet til readFileSync, den gir deg nemlig en String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
