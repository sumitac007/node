var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'pneitsh61925d';
var port = '3000';

var app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.all('/dishes',function(req,res,next){

	res.writeHead(200,{"Content-Type":"text/html"});
	next();

});

app.get('/dishes',function(req,res,next){
	res.end('Will get the dishes for you!');
});

app.post('/dishes',function(req,res,next){
	res.end('Will add the dishes for you');
});

app.delete('/dishes', function(req,res,next){
	res.end('Will delete the dishes for you!');
});


app.get('/dishes/:dishId',function(req,res,next){
	res.end('Will fetch the details of the dish with the Id: ' + req.params.dishId);
});

app.put('/dishes/:dishId', function(req,res,next){
	res.write('Will put the dish with the dishId: ' + req.params.dishId + '\n');
	res.end('Will push the dish with name:  ' + req.body.name + ' and description: ' + req.body.desc);
});

app.delete('/dishes/:dishId', function(req,res,next){
	res.end('Will delete the dish with id: ' + req.params.dishId);
});

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
	console.log('Server running at ' + hostname + ':' + port);
});