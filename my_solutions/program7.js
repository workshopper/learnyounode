const http = require('http');
var url = process.argv[2];
http.get(url, function(response) {
    var stack = [];
    response.setEncoding('utf-8')
    response.on("data", function(data) {
        stack.push(data);
    });
    response.setEncoding('utf-8').on("error", function(error) {
        console.log("Error: " + error);
    });
    response.setEncoding('utf-8').on("end", function(end) {
        response_string = stack.join('');
        chars = response_string.length;
        console.log(chars);
        console.log(response_string);
    });
});
