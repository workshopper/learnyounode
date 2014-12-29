// Triggers: pass.callback_arguments & pass.array_argument
require("./module_invalid_08")(process.argv[2], process.argv[3], function (error, list) {
	if (error)
		return console.log(error)
	list.forEach(function (entry) {
		console.log(entry)
	})
})