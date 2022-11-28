const http = require('http');
const port = 4000;

http.createServer((request, response)=>{
    
   if (request.url == '/profile' && request.method == 'GET') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Welcome to my page!');
    }
    
}).listen(port);
console.log('Server is connected at localhost: ${port}');