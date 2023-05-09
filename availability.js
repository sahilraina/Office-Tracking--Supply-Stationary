const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('update-supply', (data) => {
    console.log('Received supply update:', data);
  
    io.emit('supply-update', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
