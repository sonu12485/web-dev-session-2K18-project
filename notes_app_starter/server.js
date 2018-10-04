var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var PORT = 5000;

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/css',function(req, res){
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/js',function(req, res){
    res.sendFile(path.join(__dirname, 'main.js'));
});

app.listen(PORT, function(){
    console.log("App running on port " + PORT);
});
