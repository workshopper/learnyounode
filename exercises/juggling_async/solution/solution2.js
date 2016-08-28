# Solution without using bl

var http = require('http');
var result = {};
var count = 0;
    
for (var i = 0; i < 3; i++) {
  var url = process.argv[2 + i];
  result[i] = "";
  httpGet(i, url);
}

function httpGet(i, url) {
    http.get(url, function res (response) {
      response.setEncoding('utf8');
      response.on("data", function (data) {
        result[i] += data.toString();
      });
      response.on('end', () => {
        count++;
        if (count == 3) {
          for (var j = 0; j < 3; j++)
            console.log(result[j]);
        }
      });
    });
}
