const http = require('http');
const map = require('through2-map');
var port = process.argv[2];


var http_server = http.createServer(callback);
http_server.listen(port);

function callback(request, response) {
    if(request.method === 'POST') {
        response.writeHead(200, {'content-type': 'text/plain'});
        request.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase()
            })).pipe(response);
    }
}
