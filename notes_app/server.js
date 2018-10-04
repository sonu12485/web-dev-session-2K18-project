var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var PORT = 5000;

var posts = [];

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/css',function(req, res){
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/js',function(req, res){
    res.sendFile(path.join(__dirname, 'main.js'));
});

app.get('/api/posts',function(req, res){

    res.send(JSON.stringify(posts));
});

app.post('/api/post',function(req, res){

    var post = {
        content: req.body.content,
        author: req.body.author
    };

    posts.push(post);

    res.sendStatus(200);
});

app.listen(PORT, function(){
    console.log("App running on port " + PORT);
});
