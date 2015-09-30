var express    = require('express');
var app        = express()
var http       = require('http').Server(app);
var server     = require('http').createServer(app)
var bodyParser = require('body-parser')
var port       = process.env.PORT || 3000
var io         = require('socket.io')(server)

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  res.render('index')
})

io.on('connection', function(socket){
  socket.on('chatroom', function(msg) {  
    io.emit('chatroom', msg);
  })
});

server.listen(port, function() {
  console.log('this is listening on the port inside a function well in son!')
})