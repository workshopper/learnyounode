#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name        : 'learnyounode'
  , title       : 'LEARN YOU THE NODE.JS FOR MUCH WIN!'
  , appDir      : __dirname
  , helpFile    : path.join(__dirname, 'help.txt')
  , creditsFile : path.join(__dirname, 'credits.txt')
}).init()
