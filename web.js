var static = require('node-static');

console.log("I am starting"); 
//
// Create a node-static server instance to serve the './app' folder
//
var file = new(static.Server)('./app');
console.log("1");
var port = process.env.PORT || 5000;
console.log("2");
require('http').createServer(function (request, response) {
	console.log("3");
    request.addListener('end', function () {
        //
        // Serve files!
        //
console.log("4");
        file.serve(request, response);
console.log("5");
    });
}).listen(port);
