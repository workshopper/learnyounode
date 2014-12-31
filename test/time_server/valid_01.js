function now (d) {
  return [
      d.getFullYear(), '-',
      d.getMonth() + 1, '-',
      d.getDate(), ' ',
      d.getHours(), ':',
      d.getMinutes()
    ].reduce(function (before, current, count) {
      return before + (count % 2 || ('' + current).length === 2 ? '' : '0') + current
    })
}

require('net').createServer(function (socket) {
  socket.end(now(new Date()) + '\n')
}).listen(process.argv[2] | 0)