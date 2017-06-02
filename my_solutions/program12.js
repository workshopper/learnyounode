const http = require('http');
const map = require('through2-map');
const url = require('url');
var port = process.argv[2];


var http_server = http.createServer(callback);
http_server.listen(port);

function callback(request, response) {
    if(request.method === 'GET') {
        var path = url.parse(request.url, true);
        var out;
        if(path.pathname === '/api/parsetime') {
            var date = new Date(path.query.iso);
            out = {"hour": date.getHours(),
                   "minute": date.getMinutes(),
                   "second": date.getSeconds()};
        } else if(path.pathname === '/api/unixtime') {
            out = {'unixtime': Date.parse(path.query.iso)};
        } else {
            return;
        }
        response.writeHead(200, {'content-type': 'text/json'});
        response.end(JSON.stringify(out));
    }
}
