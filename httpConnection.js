var http = require('http');

http.createServer( function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is first node program. Hello World!');
}).listen(8080);
