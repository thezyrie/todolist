const http = require('http');
http.createServer((req, res) => {
    console.log(`server: ${req.method}`);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
}).listen(8000);
