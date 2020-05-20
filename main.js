const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname , 'mainServer')));

app.get('/' , function(req ,res)
{
    res.sendFile(path.join(__dirname , 'mainServer' , 'main.html'));
});

app.get('/ABOUT%20US' , function(req ,res)
{
    res.sendFile(path.join(__dirname , 'mainServer' , 'aboutUS.html'));
});


app.listen(3000 , function(req, res)
{
    console.log("Server stated at " + 3000);
})