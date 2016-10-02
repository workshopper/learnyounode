function finish (ctx) {
  ctx.requires = Object.keys(require.cache)
}

module.exports.finish = finish
