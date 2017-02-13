var fortune =require('./lib.fortune.js');
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	//res.type('text/plain');
	//res.send('MeadowLark Travel');
    res.render('home');
});

app.get('/about', function(req, res){
	//res.type('text/plain');
	//res.send('About MeadowLark Travel');
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', {fortune: randomFortune});
});

app.use(function(req, res){
	//res.type('text/plain');
	res.status(404);
	//res.send('404 - Not Found');
    res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	//res.send('500 -Server Error');
    res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});


var fortunes = [
    "Rivers need springs";
]