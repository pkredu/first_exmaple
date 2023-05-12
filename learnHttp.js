var http = require('http');

var newServer = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Again Edureka - responded!');
    res.end();
})

newServer.listen(8080);
