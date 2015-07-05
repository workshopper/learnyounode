#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , credits     = require('./credits')

function fpath (f) {
  return path.join(__dirname, f)
}

workshopper({
      name        : 'learnyounode'
    , appDir      : __dirname
    , languages   : ['en', 'es', 'fr', 'ja', 'zh-cn', 'zh-tw', 'pt-br', 'ru', 'uk', 'vi', 'ko', 'nb-no']
    , helpFile    : fpath('./i18n/help/{lang}.txt')
    , menuItems   : [ {
          name    : 'credits'
        , handler : credits
      } ]
  })
