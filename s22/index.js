console.log("Connected");

let http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Joey');
}).listen(4000);