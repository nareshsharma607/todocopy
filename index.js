const bodyParser = require('body-parser');
const express=require('express');

const port=3000;

const todoCollection=require('./models/todo');

const db =require('./config/mongoose');

const app=express();

//stting up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('assets'));
app.use(bodyParser.urlencoded());


//sending data to home 
app.get('/',function(req,res){
    todoCollection.find({},function(err,taskList){
        if(err){
            console.log('error in fatching contacts from db')
            return;
        }
    res.render('home',{
        task_List:taskList
    });
    })


//to delete the task    
app.get('/delete-task/',function(req,res){
    let id= req.query.id;
    todoCollection.findByIdAndDelete(id,function(err){
     if(err){
         console.log('error in deleting an object from database')
     }
     return res.redirect('/');
    });
    

    
    
})
//to post the data to database
app.post('/practice',function(req,res){
    todoCollection.create({
        task:req.body.task,
        date:req.body.date

    },function(err,taskCreated){
        if(err){
            console.log('error in in creating task')
return;        }
        console.log('*******',taskCreated);
         return res.redirect('back');
    });
    
})

})

//creating server on port 

app.listen(port,function(){
    console.log(`server is running on port ${port} `)
})