const spawn   = require('child_process').spawn
    , tuple   = require('tuple-stream')
    , through = require('through')
    , split   = require('split')
    , path    = require('path')

const wrap    = require('./term-util').wrap
    , red     = require('./term-util').red
    , green   = require('./term-util').green
    , yellow  = require('./term-util').yellow

function verify (acmd, bcmd, opts) {
  if (!opts) opts = {}

  var a = spawn(process.execPath, acmd)
    , b
    , c
    , tr
    , kill = function () {
        if (a && a.kill)
          a.kill()
        if (b && b.kill)
          b.kill()
      }

  if (opts.run) {
    ;(opts.a || a.stdout).pipe(process.stdout)
    ;(opts.a || a.stdout).on('end', kill)
    if (a.stderr) a.stderr.pipe(process.stderr)
    return opts.a || a.stdin
  }

  b = spawn(process.execPath, bcmd)
  c = compare(opts.a || a.stdout, opts.b || b.stdout, opts)

  c.on('pass', function () {
    kill()
    tr.emit('pass')
  })

  c.on('fail', function () {
    kill()
    tr.emit('fail')
  })

  tr = through()
  tr.pipe(opts.a || a.stdin)
  tr.pipe(opts.b || b.stdin)
  
  return tr
}

function colourfn (type) {
  return type == 'PASS' ? green : red
}

function compare (actual, expected, opts) {
  var equal  = true
    , write = function (pair) {
        var eq = pair[0] === pair[1]

        equal = equal && eq
        
        if (opts.long) {
          this.queue('ACTUAL:   '
            + colourfn(eq ? 'PASS' : 'FAIL')(JSON.stringify(pair[0]))
            + '\n'
            + 'EXPECTED: '
            + JSON.stringify(pair[1])
            + '\n\n'
          )
        } else {
          this.queue(
              colourfn(eq ? 'PASS' : 'FAIL')(
                  wrap(JSON.stringify(pair[0]), 30)
                + ' ' + (eq ? '  ' : '!=') + ' '
                + wrap(JSON.stringify(pair[1]), 30)
              )
            + '\n'
          )
        }
      }
    , end    = function () {
        this.queue(null)
        if (!equal)
          return this.emit('fail')
        if (typeof opts.custom != 'function')
          return this.emit('pass')

        opts.custom(function (err) {
          this.emit(!err ? 'pass' : 'fail')
        }.bind(this))
      }
    , output = through(write, end).pause()

  if (!opts.long) {
    output.queue(wrap('ACTUAL', 30) + '    EXPECTED\n')
    output.queue(wrap('------', 30) + '    --------\n')
  }

  tuple(actual.pipe(split()), expected.pipe(split()))
    .pipe(output)
    .pipe(process.stdout)

  output.resume()

  return output
}

module.exports = verify