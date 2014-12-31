require('http').createServer(function (req, res) {
  if (req.method !== 'POST')
    return res.end('POST only!\n')

  req.pipe(require('through2-map')(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
}).listen(process.argv[2] | 0)
