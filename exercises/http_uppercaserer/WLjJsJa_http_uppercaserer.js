const map = require('through2-map')
const http = require('http')

var srvr = http.createServer(function(req, res){
 if (req.method === 'POST'){
  req.pipe(map(function(data){
   return data.toString().toUpperCase()
  })).pipe(res)
 }
})
srvr.listen(+process.argv[2])




