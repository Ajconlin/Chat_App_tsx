const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000

const router = require('./router');
app.use(router);
const socketio = require('socket.io');
const { addUser, removeUser, getUser, getUserInRoom } =  require('./users');

// Socket server

io.on('connection', socket => {
    socket.on('join', ({ name, room }) => {
        const { error, user } = addUser({ id: socket.id, name, room});

        if (error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has entered the chat room!` });

        socket.join(user.room);

        callBack();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        
        io.to(user.room).emit('message', { user: 'admin', text: message });

        callback();
    });

    socket.on('disconnect', () => {
        console.log('user left');
    })
});

server.listen(PORT , () => console.log(`Server started on ${PORT}`))