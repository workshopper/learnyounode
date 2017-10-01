const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// Chú ý: Bạn có không cần sử dụng .toString() bằng cách truyền 'utf8' cho
// tham số thứ 2 của readFileSync, bạn cũng có thể lấy được một String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
