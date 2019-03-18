const router = require('./routes/route')
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const chatControllers = require('./controller/user.controller')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator());
app.use(bodyParser.json())
// define a simple route
app.use('/', router);
require('dotenv').config()
/**
 *  Configuring the database 
 */
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
/**
 * Connecting to the database 
 */ 
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to chatApp" });
});
/**
 * listen for requests registration
 */ 
const server = app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
connections = [];
const io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket) {
    console.log("hiii connected to  io");
    connections.push(socket)
    console.log("connected to user")
    socket.on('new_msg', function (req) {
        chatControllers.addMessage(req, (err, result) => {
            if (err) {
                console.log("error on server while receiving data");
            }
            else {
                //socket.emit('emitMsg', result);
            }
            io.emit(req.recieverId,req);
            io.emit(req.senderId,req);
        })

    })
})

/**Disconnect
  */
io.on('disconnect', function (data) {
    connections.splice(connections.indexOf(socket), 1)
    console.log("user disconnected");

})




// var express = require("express")

// var app = express()

// app.listen(3024,()=>{

//  console.log("Well done, now I am listening...")GET

// })
// app.use(express.static(__dirname))