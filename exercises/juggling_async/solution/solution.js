const http = require("http")
var required_queue = process.argv.length - 2
var queue = 0
var urls = process.argv.slice(2)
var dict = {}

urls.forEach(function (url) {
	dict[url] = ""
	http.get(url, function (response) {
		response.setEncoding('utf8')
		response.on("error", function (err) {
			console.error(err)
		})
		response.on("data", function (chunk) {
			dict[url] += chunk
		})
		
		response.on("end", function () {
			queue++
			
			if (queue == required_queue) {
				urls.forEach(function (key) {
					console.log(dict[key])
				})
			}
		})
	})
})
