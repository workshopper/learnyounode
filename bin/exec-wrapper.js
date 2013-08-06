const path = require('path')

// load whatever we've been told to in the first arg
require(process.argv[2]).init(process.argv[3])
// remove a trace of this wrapper.. sneaky sneaky
process.argv.splice(1, 3)
require(path.join(process.cwd(), process.argv[1]))