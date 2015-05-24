var socketio = require('socket.io');

module.exports = initSockets;

function initSockets(http){
    
    var io = require('socket.io')(http);
    
    io.on('connection', function(socket){
    
        console.log('a user connected');

        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
        
        socket.on('chat message', function(msg){
            io.emit('chat message', msg);
            console.log('message: ' + msg);
        });

    });
    
};