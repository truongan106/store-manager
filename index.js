var express = require('express');
var app=express();

app.use(express.static('htdoc'));
app.use('/components',express.static('bower_components'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/pug', function(req,res){
  res.render('index', {title:'Hey', message:'Hello'});
});

var port = 3400;
app.listen(port, function(){
console.log('Started Server');
})
