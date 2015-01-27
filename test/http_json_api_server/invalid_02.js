require('http').createServer(function (req, res) {
  var time = new Date(require('url').parse(req.url, true).query.iso)
  var result =
      /^\/api\/parsetime/.test(req.url)
    ? {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    : /^\/api\/unixtime/.test(req.url)
    ? { unixtime: time.getTime() + 1 }
    : null

  if (result) {
    res.writeHead(200, 'Content-Type: application/json')
    result = JSON.stringify(result)
  } else
    res.writeHead(404)

  res.end(result)
}).listen(process.argv[2] | 0)