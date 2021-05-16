//require the library
const mongoose=require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/to_do_db');

//aquire the connection(to check if it is succesfull)
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'connection error'));

//up and running then print the message
db.once('open',function(){
    console.log('we are connected to database');
})