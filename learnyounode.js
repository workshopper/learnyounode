#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , credits     = require('./credits')
    , menu        = require('./exercises/menu')

    , name        = 'learnyounode'
    , title       = 'LEARN YOU THE NODE.JS FOR MUCH WIN!'
    , subtitle    = '\x1b[23m選擇一個問題，然後按下 \x1b[3mEnter\x1b[23m 開始嘗試！'


function fpath (f) {
  return path.join(__dirname, f)
}


workshopper({
    name        : name
  , title       : title
  , subtitle    : subtitle
  , exerciseDir : fpath('./exercises/')
  , appDir      : __dirname
  , helpFile    : fpath('help.txt')
  , menuItems   : [ {
        name    : 'credits'
      , handler : credits
    } ]
})
