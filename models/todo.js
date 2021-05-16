//require library
const mongoose=require('mongoose');

//setting up schema
const todoSchema= new mongoose.Schema({
    task:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})

//creating collection
const todoCollection=mongoose.model('todoCollection',todoSchema);

//exporting the collection
module.exports=todoCollection;