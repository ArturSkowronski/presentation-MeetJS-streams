socket.on('data', function(data){
  socket.write(data)
});

socket.on('end', function(){
  socket.end()
});