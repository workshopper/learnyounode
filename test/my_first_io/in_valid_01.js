var fs = require('fs')
  , path = require('path')

fs.readFile(process.argv[2], count_new_lines)

function count_new_lines(error, text) { 
    if (error)
    	return console.error(error)

	var lineCount = text.toString().split('\n').length - 1
	console.log(lineCount)
}