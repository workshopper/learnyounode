const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// 注：'readFileSync' の二つ目の引数に 'utf8' を渡すと、
// '.toString' を使わずに文字列を受け取ることが出来ます！
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
