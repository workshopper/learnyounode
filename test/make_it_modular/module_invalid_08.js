var fs = require("fs")
module.exports = function(directory, filter, callback) {
	fs.readdir(directory, function (error, list) {
		if (error)
			return callback(error)
		
		callback(null, list.filter(function (entry) {
			return entry.substr(entry.length-filter.length) === filter
		}))
	})
}