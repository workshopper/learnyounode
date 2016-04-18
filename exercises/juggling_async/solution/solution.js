var http = require("http");
var responses = [];
var count = 3;

function printResponses() {
    console.log(responses.join('\n'));
}

function getData(index) {
    http.get(process.argv[2 + index], function(response) {
        var data = [];
        response.setEncoding('utf8');
        response.on('data', function(string) {
            data.push(string);
        });
        response.on('end', function() {
           responses[index] = data.join('');
           count--;
           if (count === 0) {
               printResponses();
           }
        });
    });
}

for(var i=0; i < 3; i++) {
    var content = getData(i);
}
