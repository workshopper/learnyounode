const http = require('http')
let outputData = ''

http.get(process.argv[2], function (response) {
    if (err) {
      return console.error(err)
    }
    response.setEncoding("utf8");
    response.on("data", function (data) {
        outputData += data
    }) 
    response.on("end", function () {
        console.log(outputData.length)
        console.log(outputData)
    })
});
