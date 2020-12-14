const http = require('http')
const os = require('os')

console.log("Kubia server starting...")

var requestsNumber = 0;

var handler = function(request, response) {
    if (requestsNumber < 5) {
        console.log("Received request from "+request.connection.remoteAddress);
        response.writeHead(200);
        response.end("You've hit " + os.hostname() + "\n");
        requestsNumber++;
    }
    else {
        console.log("Received request from "+request.connection.remoteAddress);
        response.writeHead(500);
        response.end("Error");
    }
}

var www = http.createServer(handler);
www.listen(8443);
