require("./module_valid_01")(process.argv[2], process.argv[3], function (error, list) {
	if (error)
		return console.log(error)
	list.forEach(function (entry) {
		console.log(entry)
	})
})