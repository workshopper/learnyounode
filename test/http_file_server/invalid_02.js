require('fs').readFileSync(process.argv[3])
require('http').createServer(function (req, res) {
  res.writeHead(200, 'content-type: text/plain')
  res.end(require('fs').readFileSync(process.argv[3], 'utf8'))
}).listen(process.argv[2] | 0)