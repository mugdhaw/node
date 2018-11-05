var http = require('http'); // Import Node.js core module

var server = http.createServer( function(req, res){ // create web server
    console.log("request url ::",req.url);
    if (req.url == "/") { // check the URL of the current request
        // set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // set response Content
        res.write("This is home page");
		res.end();
    } else if(req.url == "/student") { 
        res.writeHead(200, {'Content-Type': 'text/html'});
         res.write('<html><body><p>This is student Page.</p></body></html>');
		res.end();
    } else if (req.url == '/data') { // To serve JSON response
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: "Hello, This is Json Response"}));  
            res.end();  
    } else {
         res.end('Invalid Request!');
    }
});
server.listen(5050);
