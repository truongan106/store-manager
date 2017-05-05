var express = require('express');
var app=express();

app.use(express.static('htdoc'));
app.use('/components',express.static('bower_components'));

app.get('/', function(req,res){
  res.send('Hello');
});

var port = 3400;
app.listen(port, function(){
console.log('Started Server');
})
