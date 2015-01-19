var fs = require("fs")
module.exports = function(directory, filter, callback) {
	fs.readdir(directory, function (error) {
		callback(error, [])
	})
}