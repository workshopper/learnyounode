const tmenu        = require('terminal-menu')
    , path         = require('path')
    , fs           = require('fs')
    , EventEmitter = require('events').EventEmitter

const printText = require('./print-text')
    , repeat    = require('./term-util').repeat
    , bold      = require('./term-util').bold

const title        = 'LEARN YOU THE NODE.JS FOR MUCH WIN!'

function showMenu (opts) {
  var emitter  = new EventEmitter()
    , menu     = tmenu({ width: opts.width, x: 3, y : 2 })
    , problems = require('../menu.json')

  menu.reset()
  menu.write(bold(title) + '\n')
  menu.write(repeat('-', opts.width) + '\n')
    
  problems.forEach(function (name, i) {
    var isDone = opts.completed.indexOf(name) >= 0
      , m      = '[COMPLETED]'

    name = (i + 1) + '. ' + name

    if (isDone)
      return menu.add(name + Array(65 - m.length - name.length + 1).join(' ') + m)
    else
      menu.add(name)
  })

  menu.write(repeat('-', opts.width) + '\n')
  menu.add(bold('HELP'))
  menu.add(bold('EXIT'))
  
  menu.on('select', function (label) {
    var name = label.replace(/(^\d+\. )|(\s{2}.*)/g, '')
    
    menu.close()

    if (name === bold('EXIT'))
      return emitter.emit('exit')
    if (name === bold('HELP')) {
      console.log()
      return printText(opts.appname, path.join(__dirname, '/usage.txt'))
    }

    emitter.emit('select', name)
  })

  menu.createStream().pipe(process.stdout)
  
  return emitter
}

module.exports = showMenu