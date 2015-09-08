var server = require("./server");
var router = require("./router");
var rh = require("./requestHandlers");
var util = require('util');


var handle = {};
handle['/'] = rh.homepage;

server.start(router.route, handle);
