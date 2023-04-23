const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Store usernames and their corresponding socket IDs
const users = {};

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('User connected');

  // Handle addUser event
  socket.on('addUser', username => {
    console.log(`${username} joined`);
    users[socket.id] = username;
    io.emit('userConnected', { id: socket.id, username });
  });

  // Handle draw event
  socket.on('draw', data => {
    socket.broadcast.emit('draw', data);
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    console.log('User disconnected');
    const username = users[socket.id];
    delete users[socket.id];
    io.emit('userDisconnected', { id: socket.id, username });
  });
});

const port = process.env.PORT || 3005;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
