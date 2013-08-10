const through = require('through')
  , hyperquest = require('hyperquest')

module.exports = function () {
  var outputA = through()
    , outputB = through()

  setTimeout(function () {
    var hqa
      , hqb

    var query='?iso=2013-08-10T09:36:12.371Z';
    ['parse'].forEach(function(endpoint) {
      hqa = hyperquest.get('http://localhost:8000/api/' + endpoint+ query);
      hqa.pipe(outputA);

      hqb = hyperquest.get('http://localhost:8001/api/' + endpoint + query);
      hqb.pipe(outputB);
    });

  }, 500)

  return {
      args : []
    , a    : outputA
    , b    : outputB
    , long : true
  }
}
