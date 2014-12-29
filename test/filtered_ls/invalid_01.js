var fs = require('fs')
var path = require('path')

var list = fs.readdirSync(process.argv[2])
list.filter(function (file) {
	return path.extname(file) === '.' + process.argv[3]
}).forEach(function (file) {
	console.log(file)
})