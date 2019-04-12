
const express=require('express');

const bodyParser=require('body-parser');

const expressValidator=require('express-validator')

const route=require('./routes/route')

const app=express();


app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.use(expressValidator())

app.use('/',route)

require('dotenv').config()

const dbConfig=require('./config/database.config')
const mongoose=require('mongoose')

mongoose.Promise=global.Promise;


mongoose.connect(dbConfig.url , {
    useNewUrlParser:true
}).then(()=>{
    console.log("Successfully connected to the database");
    
}).catch(()=>{
    console.log("Couldnot connect to the database");
    process.exit();   
})
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
app.listen(8000,()=>{
    console.log("Server is Listening to port 8000");
    
});


module.exports=app;







        


