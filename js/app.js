var express = require('express');
var app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8585);

app.use(express.static(__dirname));

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

io.sockets.on('connection', function (socket) {
	var i = 0;
	while(i++ < 10) {
	  socket.emit('new-data', { value: 'hello world' });
	}
  socket.on('my other event', function (data) {
    console.log(data);
  });
});