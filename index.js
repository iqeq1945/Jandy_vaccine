// index.js

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('views engine', 'ejs');
app.use(bodyParser().json);
app.use(express.static(__dirname + '/public'));


app.use('/',require('./routes/vaccine'));


var port = 3000;

app.listen(port, function(){
    console.log(`server on! http://localhost : ${port}`);
})
