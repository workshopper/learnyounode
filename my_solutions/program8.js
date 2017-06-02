const http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var counter = 0;
var out = Array(3);

var out1 = get_url(url1, 0, callback);
var out2 = get_url(url2, 1, callback);
var out3 = get_url(url3, 2, callback);

function callback(resp, num) {
    counter++;
    out[num] = resp;
    if(counter === 3) {
        out.forEach(function(element) {
            console.log(element);
        });
    }
}

function get_url(url, num, callback) {
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
                return callback(response_string, num);
            });
    });
}
