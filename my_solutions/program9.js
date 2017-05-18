const net = require('net');
var port = process.argv[2];

function callback(resp, num) {
    counter++;
    out[num] = resp;
    if(counter === 3) {
        out.forEach(function(element) {
            console.log(element);
        });
    }
}
var tcp_server = net.createServer(listener);
tcp_server.listen(port);

function zero_pad(num) {
    if(num.length === 1) {
        num = '0' + num;
    }
    return num;
}
function listener(socket) {
    
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = zero_pad((date.getMonth() + 1).toString());
    var day = zero_pad(date.getDate().toString());
    var hours = zero_pad(date.getHours().toString());
    var minutes = zero_pad(date.getMinutes().toString());
    to_write = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
    socket.end(to_write);
}
