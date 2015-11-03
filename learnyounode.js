const learnyounode = require('workshopper-adventure')({
    appDir      : __dirname
  , languages   : ['en', 'es', 'fr', 'ja', 'zh-cn', 'zh-tw', 'pt-br', 'ru', 'uk', 'vi', 'ko', 'nb-no']
  , header      : require('workshopper-adventure/default/header')
  , footer      : require('workshopper-adventure/default/footer')
  , commands    : [ {
        aliases : ['credits']
      , handler : require('./credits')
    } ]
})

learnyounode.addAll([
    "HELLO WORLD"
  , "BABY STEPS"
  , "MY FIRST I/O!"
  , "MY FIRST ASYNC I/O!"
  , "FILTERED LS"
  , "MAKE IT MODULAR"
  , "HTTP CLIENT"
  , "HTTP COLLECT"
  , "JUGGLING ASYNC"
  , "TIME SERVER"
  , "HTTP FILE SERVER"
  , "HTTP UPPERCASERER"
  , "HTTP JSON API SERVER"
])

module.exports = learnyounode
