const express=require('express');
const bodyParser=require('body-parser')
const route=require('./routes/route')
const expressValidator=require('express-validator')

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(expressValidator())
// define a simple route
app.use('/', route);
require('dotenv').config()

// Configuring the database
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
})
app.get('/', (req, res) => {
     res.json({"message": "wellcome ."});
 });

// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});

module.exports=app;