var express    = require('express');
var app        = express()
var http       = require('http').Server(app);
var server     = require('http').createServer(app)
var morgan     = require('morgan')
var bodyParser = require('body-parser')
var port       = process.env.PORT || 3000
var io         = require('socket.io')(server)

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  res.render('index')
})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chatroom', function(text){
    console.log(text)
  })
});

server.listen(port, function() {
  console.log('this is listening on the port inside a function well in son!')
})