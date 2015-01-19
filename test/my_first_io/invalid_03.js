var fs = require('fs')
  , path = require('path')

count_new_lines(fs.readFileSync(process.argv[2]))

function count_new_lines(text) {
	console.log(-1)
}