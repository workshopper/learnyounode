var http = require('http');
var bl = require('bl');

var urls=process.argv.slice(2); //Get rid off the node.js path & the executable name
var cbCounter=urls.length;      //We should wait as many callbacks as provided urls
var responses=[];


	urls.forEach(function(url, index){

		http.get(url, function (res){

			res.pipe(bl(function (err, data) { 

				if (err)
					return console.error(err);

	            //The index value is hold privately on each callback so we can preserve the order
		        responses[index]=data.toString();

				if(--cbCounter === 0) //Dec the counter, if it's the last callback we are done
					responses.forEach(function(r){ 
						console.log(r);
					});
		}));
	});

})
