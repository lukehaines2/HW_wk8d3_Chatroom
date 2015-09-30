$(document).ready(function(){
  
  // GLOBAL VAIRABLE THAT RUNS NGROK
  var socket = io('http://a51ae7d7.ngrok.io');

  // CHECK THE CONNECTION WORKS
  socket.on('connect', function() {
  console.log('connected')
  })

  $('form').submit(function(){
    socket.emit('chatroom', $('#name-box').val() + ': ' + $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chatroom', function(msg){
    $('#messages').append($('<li>').text(msg));
  });

})
