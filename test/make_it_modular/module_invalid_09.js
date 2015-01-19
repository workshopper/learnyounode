var fs = require("fs")
  , path = require("path")
module.exports = function(directory, filter, callback) {
	filter = "." + filter
	fs.readdir(directory, function (error, list) {
		if (error)
			return callback(error)
		
		callback(null, list.filter(function (entry) {
			return path.extname(entry) === filter
		}).map(function (entry) {
			return entry + "a"
		}))
	})
}