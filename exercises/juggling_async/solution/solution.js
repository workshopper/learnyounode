var http = require("http")

required_queue= process.argv.length - 2
queue = 0
urls = process.argv.slice(2)
var dict = {}

urls.forEach(function (url) {
	dict[url]=""
	http.get(url, function (response){
		response.setEncoding('utf8')
		response.on("error", console.error)
		response.on("data", function(chunk){
			dict[url]+=chunk
		})
		response.on("end",function(){
			queue+=1
			if (queue == required_queue){
				urls.forEach(function (key){
					console.log(dict[key])
				})
			}
		})
	})
})
