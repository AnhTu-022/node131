var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
/*var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');*/


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/view.html');
});

/*app.listen(app.get('port'), function(s) {
  console.log('Node app is running on port', app.get('port'));
});*/

http.listen(app.get('port'), function(){
  console.log('listening on :', app.get('port'));
});

//log connection
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});