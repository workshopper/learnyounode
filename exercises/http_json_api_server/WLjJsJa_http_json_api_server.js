const http = require('http')
const url = require('url')

function parsetime(time){
 return {
  hour: time.getHours(), 
  minute: time.getMinutes(),
  second: time.getSeconds()
 }
}

function unixtime(time){
 return{
  unixtime: time.getTime()
 }
}


var srvr = http.createServer(function(req, res) {
 var parsedUrl = url.parse(req.url, true)
 var time = new Date(parsedUrl.query.iso)
 var result

 if (/^\/api\/api\parsetime/.test(req.url))
 result = parsetime(time)
 else if (/^\/api\/api\unixtime/.test(req.url))
 result = unixtime(time)

if (result){
 res.writeHead(200, {'Content-Type': 'application/json'})
 res.end(JSON.stringify(result))
 }else{
 res.writeHead(404)
 res.end()
 }
})

srvr.listen(+process.argv[2])


