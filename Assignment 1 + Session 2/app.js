const http = require('http');
const fs = require('fs');

f = fs.readFileSync('./file.txt', 'utf8');

//create a server object:
http.createServer(function (req, res) {
  res.write(f); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080