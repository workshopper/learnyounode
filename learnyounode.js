const learnyounode = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en', 'es', 'fr', 'ja', 'zh-cn', 'zh-tw', 'pt-br', 'ru', 'uk', 'vi', 'ko', 'nb-no', 'it', 'tr'],
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer'),
  fail: require('workshopper-adventure/default/fail'),
  pass: require('workshopper-adventure/default/pass')
})

learnyounode.addAll([
  'HELLO WORLD',
  'BABY STEPS',
  'MY FIRST I/O!',
  'MY FIRST ASYNC I/O!',
  'FILTERED LS',
  'MAKE IT MODULAR',
  'HTTP CLIENT',
  'HTTP COLLECT',
  'JUGGLING ASYNC',
  'TIME SERVER',
  'HTTP FILE SERVER',
  'HTTP UPPERCASERER',
  'HTTP JSON API SERVER'
])

module.exports = learnyounode
