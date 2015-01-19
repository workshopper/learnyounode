require("http").get(process.argv[2], processResponse)

function processResponse(res) {
	res.setEncoding("utf8")
	res.on("data", console.log)
	res.on("error", console.error)
}