var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405, {'Allow': 'POST'})
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
