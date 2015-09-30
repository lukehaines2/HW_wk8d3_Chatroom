var socket = io('http://08a9c1a3.ngrok.io')

socket.on('connect', function() {
  console.log('connected')
})