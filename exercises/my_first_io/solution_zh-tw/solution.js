const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// 提醒你可以省去使用 .toString() ，只要把'utf8'作為
// readFileSync 的第二個輸入參數，便可輸出成字串
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
