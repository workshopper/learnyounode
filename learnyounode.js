#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , credits     = require('./credits')
    , menu        = require('./exercises/menu')

    , name        = 'learnyounode'
    , title       = 'Node.jsを学んで豊かな人生を！'
    , subtitle    = '\x1b[23m問題を選んで \x1b[3mEnter\x1b[23m 押してスタートお願いします：'


function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
    name        : name
  , title       : title
  , subtitle    : subtitle
  , exerciseDir : fpath('./exercises/')
  , footerFile  : fpath('./footer.md')
  , appDir      : __dirname
  , helpFile    : fpath('help.txt')
  , menuItems   : [ {
        name    : 'credits'
      , handler : credits
    } ]
})
