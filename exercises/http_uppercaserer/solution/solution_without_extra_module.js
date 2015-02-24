var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')
  
  var text = '';
  req.on('data', function (data) {
    text += data;
  });
  
  req.on('end', function () {
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write(text.toUpperCase());
    response.end();
  });
}

server.listen(Number(process.argv[2]))
