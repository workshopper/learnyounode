const http = require('http')
const fs = require('fs')

const srvr = http.createServer((req, res) => {
 res.writeHead(200, {'content-type': 'text/plain'})
 fs.createReadStream(process.argv[3]).pipe(res);
 //console.log(res)
 
 })
srvr.listen(+process.argv[2])
