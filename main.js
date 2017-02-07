/* Hello, World! program in node.js */
var http = require("http");
var port = 7000;

console.log('Listening on http://localhost.paypal.com:%d', port);
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(port);
