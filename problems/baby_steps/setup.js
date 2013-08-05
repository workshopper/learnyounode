function rndint () {
  return Math.ceil(Math.random() * 100)
}

module.exports = function () {
  var args = [ rndint(), rndint() ]
  while (Math.random() > 0.3)
    args.push(rndint())

  return { args: args, stdin: null }
}