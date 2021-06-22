// require and instantiate express
var express = require('express');
const { v4: uuidv4 } = require('uuid');

var app = express();

app.set('view engine', 'ejs'); // set up ejs for templating

//middlewares
app.use(express.static('public'));

// express server
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

// route
app.get('/', function (req, res) {
    res.render('index.ejs');
});

var io = require('socket.io')(server);

// Registar o evento Connection

io.on('connection', function(socket){
    console.log("New User Connected");
    socket.username = "User" + uuidv4();
    //console.log(socket.id);

    io.sockets.emit('user_connected', {username: socket.username});

    socket.on('disconnect', () =>{
        io.sockets.emit('user_disconnected', {username: socket.username});
    })

    socket.on('send_message', (data) =>{
        io.sockets.emit('send_message', { message: data.message, username: socket.username});

    })




    // socket.on('send_message', (data) =>{
    // io.sockets.emit('broadcast_message')

})




