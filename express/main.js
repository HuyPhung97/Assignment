const express = require('express');
const path = require('path');
const fs = require('fs')
var bodyParser = require("body-parser");
const app = express();

app.use(bodyParser());
app.use(express.static(path.join(__dirname , 'mainServer')));


// main site 
app.get('/' , function(req ,res)
{
    res.sendFile(path.join(__dirname , 'mainServer' , 'main.html'));
});

// UC site 
app.get('/UC' , function (req , res)
{
    res.sendFile(path.join(__dirname , 'mainServer', 'UCsite.html'));
})

//create form
app.get('/createForm' , function(req ,res)
{
    res.sendFile(path.join(__dirname , 'mainServer' , 'createForm.html'));
});

app.post('/createForm' , function(req , res)
{
    res.sendFile(path.join(__dirname , 'mainServer' , 'createForm.html'));
    var data = req.body;
    var question = "question";
    console.log(data);
    var object1 = {
        id : req.body.idNumber,
        name : req.body.nameCreater,
        email : req.body.email,
        title : req.body.title,
        des : req.body.describle,
    }

    var containQuestion = [];
  
    if(typeof (data[question]) == "object" )
    {
        for(var i = 0 ; i < data[question].length ; i++)
         {
        var e = i + 1;
        var option = "option" + e;
        var ob = {
            question : data[question][i],
            category : data.category[i],
            option : data[option].toString()       
            } 

             containQuestion.push(ob);
        }
    }
    else if(typeof (data[question]) == "string")
     {
        var option ="option1";
        var ob = {
            question : data[question],
            category : data.category,      
            option : data[option]
            }     
        containQuestion.push(ob);
    }
    
    object1.question = containQuestion;

   var filePath = __dirname + '/mainServer/data/test.txt';

    fs.appendFile(filePath, JSON.stringify(object1)+"\n", function (err)
    {
        if (err)
        {
        console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
        }
         else 
         {
             console.log("Compeleted");
             res.end();
         }
    });
   
});


// about site 
app.get('/ABOUT%20US' , function(req ,res)
{
    res.sendFile(path.join(__dirname , 'mainServer' , 'aboutUS.html'));
});


//student site 
app.get('/student' , function(req ,res)
{
    res.sendFile(path.join(__dirname , 'mainServer' , 'studentSite.html'));
});

app.post('/student',  function(req ,res)
{
    res.sendFile(path.join(__dirname , 'mainServer' , 'studentSite.html'));
    console.log(JSON.stringify(req.body.name));
});


app.listen(3000 , function(req, res)
{
    console.log("Server stated at " + 3000);
})