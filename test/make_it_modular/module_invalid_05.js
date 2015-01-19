var fs = require("fs")
module.exports = function(directory, filter, callback) {
	fs.readDir(directory, function () {
		callback()
	})
}