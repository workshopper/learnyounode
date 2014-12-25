var fs = require('fs')
  , path = require('path')

count_new_lines(fs.readFileSync(process.argv[2]))

function count_new_lines(text) {
	var lineCount = text.toString().split('\n').length - 1
	console.log(lineCount)
}