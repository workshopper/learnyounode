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
    , langs       : ['en', 'ja']
    , helpFile    : fpath('./i18n/help/{lang}.txt')
    , menuItems   : [ {
          name    : 'credits'
        , handler : credits
      } ]
  })
