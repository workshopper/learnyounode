// Other notes
// var x = 5;
// var y = x++; // x is given to y and then x is incremented by 1
// console.log(x);
// console.log(y);

//console.log("HELLO WORLD");

// let result = 0;
// for (let i = 2; i <+ process.argv.length; i++) {
//   result += Number(process.argv[i]);
// }
// console.log(result);

//        Retrieving a file Synchronously ****************************
// const fs = require('fs');
// const buffer = fs.readFileSync(process.argv[2]);
// const newLines = buffer.toString().split('\n').length - 1;
// console.log(newLines);
//        Retrieving a file Asynchronously ****************************
// fs.readFile(process.argv[2], 'utf8', function(err, data) {
//   if (err) {
//     console.log(err);
//   }
//   const newLines = data.toString().split('\n').length - 1;
//   console.log(newLines);
// });

//         Create a program that prints a list of files in a given directory, filtered by the extension of the files ****************************
// const fs = require('fs');
// const path = require('path');
//
// const dir = process.argv[2];
// const ext = '.' + process.argv[3];
//
// fs.readdir(dir, function (err, files) {
//   if (err) {
//     console.error(err);
//   }
//   files.forEach(function(file) {
//     if (path.extname(file) === ext) {
//       console.log(file);
//     }
//   })
// });

//         Create a program that prints a list of files in a given directory, filtered by the extension of the files using a MODULE ****************************
// const myFilter = require('./programFilter.js');
// const dir = process.argv[2];
// const ext = process.argv[3];
//
// myFilter(dir, ext, function(err, files) {
//   if (err) {
//     return console.error('There was an error', err);
//   }
//
//   files.forEach(function(file) {
//     console.log(file);
//   });
// });

//        Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument ****************************
// const http = require('http');
//
// http.get(process.argv[2], (res) => {
//   const { statusCode } = res;
//   let err;
//   if (statusCode !== 200) {
//     err = new Error('Request Failed: Status Code ' + statusCode );
//   }                                                                   // MAKE IT EASY
//   res.setEncoding('utf8');                                           // response.setEncoding('utf8')
//   res.on('data', function(data) {                                    // response.on('data', console.log)
//     console.log(data);                                               // response.on('error', console.error)
//   });
// }).on('error', console.error);

// HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server ****************************
// const http = require('http');
// const bl = require('bl');
//
// http.get(process.argv[2], (res) => {
//   res.pipe(bl(function(err, data){       // Use a third-party package to abstract the difficulties involved in collecting an entire stream of data.
//     if(err) {
//       console.log(err);
//     }
//     let strData = data.toString();
//     console.log(strData.length);
//     console.log(strData);
//   }));
// });

// Same as above only this time you will be provided with (3)three URLs as the first three command-line arguments ****************************
const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;

function getResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function runData(index) {
  http.get(process.argv[2 + index], (res) => {
    res.pipe(bl(function(err, data) {
        if (err) {
          console.error(err);
        }

        results[index] = data.toString();
        count++;

        if (count === 3) {
          getResults();
        }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  runData(i);
}
