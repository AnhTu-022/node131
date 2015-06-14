var express = require('express');
var app = express(),
	http = require('http'),
	io = require('socket.io').listen(server, {log: false});


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

/*app.get('/', function(request, response) {
  response.send('Hello World!');
});*/

app.get('/', function(req, res){
  res.sendFile(__dirname + '/view.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

