'use strict'

console.log(
  process.argv.slice(2).reduce(
    (x, y) => x + Number(y), 0
  )
);
