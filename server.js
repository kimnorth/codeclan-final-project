var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');
});

app.use(express.static('client/build'))

var lobby = io.of('/lobby');

lobby.on('connection', function(socket){         // listen for a connection

  // Count how many sockets are active in the namespace

  var srvSockets = io.sockets.sockets;
  var totalConnected = Object.keys(srvSockets).length
  console.log(totalConnected)

  socket.join('game'); 
   
  socket.on('click button', (data) => {
    socket.broadcast.to('game').emit('click button', data);
  });

  console.log(socket.id)

})
  
  

http.listen(3000, function(){
  console.log('listening on *:3000');
});