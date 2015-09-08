// requestHandlers
var http = require('http');  

function homepage(response) {
		console.log("Request handler 'upload' was called.");
		response.writeHead(200, {"Content-Type": "text/html"}); 
		response.write("Hello World");
		response.end();
}	

exports.homepage = homepage;

