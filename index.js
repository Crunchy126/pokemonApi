//make basic express server

var express = require('express');

var app = express();

//caps for constant stuff
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send('Welcome to my API!')
})

app.get('/pokemon', (res,req)=>{
    res.json({
        name:"Bulbasaur",
        type: "grass"
    })
})

app.listen(PORT, function(){
    console.log('listening on port' + PORT);
    
})