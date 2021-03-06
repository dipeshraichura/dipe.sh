var http = require("http");
var url = require("url");
var util = require('util');
var port = process.env.PORT || 3000;


function start(route, handle) {

  console.log("Request Handles");
  //console.log(util.inspect(handle, { showHidden: true, depth: null }));
  
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
}

exports.start = start;