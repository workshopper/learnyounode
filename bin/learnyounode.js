#!/usr/bin/env node

const appname  = 'learnyounode'
    , width    = 65

const argv     = require('optimist').argv
    , fs       = require('fs')
    , path     = require('path')
    , mkdirp   = require('mkdirp')
    , dataDir  = path.join(
          process.env.HOME || process.env.USERPROFILE
        , '.config'
        , appname
      )

mkdirp.sync(dataDir)

const showMenu  = require('./menu')
    , verify    = require('./verify')
    , printText = require('./print-text')
    , repeat    = require('./term-util').repeat
    , bold      = require('./term-util').bold
    , red       = require('./term-util').red
    , green     = require('./term-util').green
    , center    = require('./term-util').center
    , problems  = require('../menu.json')

if (argv.h || argv.help || argv._[0] === 'help')
  return printText(appname, path.join(__dirname, '/usage.txt'))

if (argv._[0] === 'list') {
  return problems.forEach(function (name) {
    console.log(name)
  })
}

if (argv._[0] === 'current')
  return console.log(getData('current'))

if (argv._[0] === 'select')
  return onselect(argv._.slice(1).join(' '))

if (argv._[0] === 'verify' || argv._[0] === 'run') {
  var current = getData('current')
    , dir
    , setup

  if (!current) {
    console.error('ERROR: No active problem. Select a challenge from the menu.')
    return process.exit(1)
  }
  
  dir   = dirFromName(current)
  setup = require(dir + '/setup.js')()

  setTimeout(runSetup.bind(null, setup, dir, current), setup.wait || 1)
} else {
  var menu = showMenu({
      appname   : appname
    , width     : width
    , completed : getData('completed') || []
  })
  menu.on('select', onselect)
  menu.on('exit', function () {
    console.log()
    process.exit(0)
  })
}

function runSetup (setup, dir, current) {
  var a = [ argv._[1] ].concat(setup.args || [])
    , b = [ dir + '/solution.js' ].concat(setup.args || [])
    , v = verify(a, b, {
          a    : setup.a
        , b    : setup.b
        , long : setup.long
        , run  : argv._[0] === 'run'
      })

  v.on('pass', onpass.bind(null, setup, dir, current))
  v.on('fail', onfail.bind(null, setup, dir, current))
  
  if (setup.stdin) {
    setup.stdin.pipe(v)
    setup.stdin.resume()
  }
  
  if (setup.a)
    setup.a.resume()
  if (setup.b)
    setup.b.resume()
}

function onpass (setup, dir, current) {
  console.log(bold(green('# PASS')))
  console.log('\nYour solution to ' + current + ' passed!')
  console.log('\nHere\'s what the official solution is if you want to compare notes:\n')
  var src = fs.readFileSync(path.join(dir, 'solution.js'), 'utf8')
    , completed
    , remaining

  src.split('\n').forEach(function (line) {
    console.log('  ' + line)
  })
  console.log()
  
  updateData('completed', function (xs) {
    if (!xs) xs = []
    var ix = xs.indexOf(current)
    return ix >= 0 ? xs : xs.concat(current)
  })
  
  completed = getData('completed') || []
  
  remaining = problems.length - completed.length
  if (remaining === 0) {
    console.log('You\'ve finished all the challenges! Hooray!\n')
  } else {
    console.log('You have ' + remaining + ' challenges left.')
    console.log('Type `' + appname + '` to show the menu.\n')
  }
  
  if (setup.close)
    setup.close()
}

function onfail (setup) {
  if (setup.close) setup.close()
  
  console.log(bold(red('# FAIL')))
  console.log('\nYour solution didn\'t match the expected output. Try again!')
}

function onselect (name) {
  console.log('\n  ' + repeat('#', 70))
  console.log(center(width, '~~  ' + name + '  ~~'))
  console.log('  ' + repeat('#', 70) + '\n')
  
  var dir  = dirFromName(name)
    , file = path.resolve(dir, 'problem.txt')

  updateData('current', function () {
    return name
  })

  printText(appname, file, function () {
    console.log('\nTo verify your program, run: `' + appname + ' verify program.js`.\n')
  })
}

function updateData (name, fn) {
  var json = {}
    , file

  try {
    json = getData(name)
  } catch (e) {}

  file = path.resolve(dataDir, name + '.json')
  fs.writeFileSync(file, JSON.stringify(fn(json)))
}

function getData (name) {
  var file = path.resolve(dataDir, name + '.json')
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch (e) {}
  return null
}

function dirFromName (name) {
  return path.join(
      __dirname
    , '../problems/'
    , name.toLowerCase()
        .replace(/\s/g, '_')
        .replace(/[^a-z_]/gi, '')
  )
}