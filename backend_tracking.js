const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// In-memory storage for request progress and pickup locations
const requests = {};

io.on('connection', (socket) => {
    console.log('User connected', socket.id);

    // Send current requests to the connected user
    socket.emit('updateRequests', requests);

    // Listen for request updates from clients
    socket.on('updateRequest', (requestId, data) => {
        requests[requestId] = data;
        io.emit('updateRequests', requests); // Broadcast the update to all connected users
    });

    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});