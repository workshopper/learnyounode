var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)

// メモ：'utf8'を'readFileSync'に二つ目の関数として渡すと'.toString'なくて
// も動いていますよ！
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1