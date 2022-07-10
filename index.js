const path = require('path')
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

io.on('connection', (socket) => {
    socket.on('msg', (payload) => {
        io.emit('msg', payload);
    });
})

server.listen(3000, () => {
    console.log('server is running on port 3000.....');
})