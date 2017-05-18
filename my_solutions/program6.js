const http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf-8').on("data", function(data) {
        console.log(data);
    });
    response.setEncoding('utf-8').on("error", function(error) {
        console.log("Error: " + error);
    });
    /* response.setEncoding('utf-8').on("end", function(end) {
        console.log("The End.")
    });
    */
});