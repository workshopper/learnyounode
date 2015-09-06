var net = require('net')

var datetime = require('node-datetime') //Requires npm install node-datetime
var dt = datetime.create()
var time = dt.format('Y-m-d H:M') //"2013-07-06 17:42"

var prt = process.argv[2]

var server = net.createServer(function (socket) { //'connection' listner
  socket.end(time + '\n')
})

server.listen(Number(prt))
