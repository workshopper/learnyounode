require('http').createServer(function (req, res) {
  var time = new Date(new URL(req.url, 'http://example.com').searchParams.get('iso')) // eslint-disable-line
  var result =
  /^\/api\/parsetime/.test(req.url)
    ? {
      hour: time.getHours() + 1,
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
    : /^\/api\/unixtime/.test(req.url)
      ? { unixtime: time.getTime() }
      : null

  if (result) {
    res.writeHead(200, 'Content-Type: application/json')
    result = JSON.stringify(result)
  } else {
    res.writeHead(404)
  }

  res.end(result)
}).listen(process.argv[2] | 0)
