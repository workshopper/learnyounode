#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name   : 'learnyounode'
  , title  : 'LEARN YOU THE NODE.JS FOR MUCH WIN!'
  , appDir : __dirname
}).init()
