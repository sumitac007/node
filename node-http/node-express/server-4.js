var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');

var hostname = 'pneitsh61925d';
var port = '3000';

var app = express();
var dishRouter = express.Router();
app.use(morgan('dev'));
dishRouter.use(parser.json());

dishRouter.route('/')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/html'});
	next();
})

.get(function(req,res,next){
	res.end('Will send the dishes');
})

.post(function(req,res,next){
	res.end('Will push the dishes');
})

.delete(function(req,res,next){
	res.end('Will delete the dishes');
});

dishRouter.route('/:dishId')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/html'});
	next();
})

.get(function(req,res,next){
	res.end('Will get the Dish with ID ' + req.params.dishId);
})

.put(function(req,res,next){
	res.write('Will update the dish with Id ' + req.params.dishId);
	res.end('Will update the dish with name ' + req.body.name + ' and description ' +  req.body.desc);
})

.delete(function(req,res,next){
	res.end('Will update the dish with Id ' + req.params.dishId);
});

app.use('/dishes',dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port,hostname,function(){
	console.log('Server Listening on host ' + hostname + ':' + port);
});
