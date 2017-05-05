var express = require('express');
var app=express();
var exphbs = require('express-handlebars');


app.use('/components',express.static('bower_components'));

app.engine('hbs', exphbs({
  extname: '.hbs'
}));

app.set('views', './views');
app.set('view engine', 'hbs');


app.get('/', function(req, res){
  res.render('index', {
    title:'Hey',
    message:'Hello',
    layout: 'application'
  });
});

var port = 3400;
app.listen(port, function(){
console.log('Started Server');
})
