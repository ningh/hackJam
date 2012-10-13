var express = require('express');
var app = express.createServer();
var PORT = 8080;

app.use(express.static(__dirname + '/public'));

app.listen(PORT);
console.log('Listening on http://localhost://'+PORT);
