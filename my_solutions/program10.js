const net = require('net');
const http = require('http');
const fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var http_server = http.createServer(callback);
http_server.listen(port);

function callback(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});
    fstream = fs.createReadStream(file);
    fstream.pipe(response);
}
