var http = require('http');
var fs = require('fs');
var path =  require('path');

var hostname = 'pneitsh61925d';
var port = '3000';
var fileurl;

var server;
server = http.createServer(function (req, res) {
	console.log('Received request for ' + req.url + ' for method ' + req.method);
	if(req.method == 'GET'){
		if(req.url == '/') 
			fileurl= '/index.html'
		else
			fileurl =req.url;

		var filepath = path.resolve('./public' + fileurl);
		var fileext = path.extname(filepath);

		if(fileext == '.html'){
			fs.exists(filepath,function(exists){
				if(!exists){
					res.writeHead(404,{'Content-Type':'text/html'});
					res.end('<h1>Error 404:  File ' + filepath + ' Not found</h1>');
					return;
				}
			res.writeHead(200,{'Content-Type': 'text/html'});
			fs.createReadStream(filepath).pipe(res);

			});
		}
		else{
			res.writeHead(200,{'Content-Type' : 'text/html'});
			res.end('<h1>Error 404: File is Not html</h1>');
		}

	}
	else{
		res.writeHead(404,{'Content-Type':'text/html'});
		res.end('<h1>Error 404: Method not Supported</h1>');
	}

});

server.listen(port,hostname,function(){
	console.log('Server running at http://' + hostname + ':' + port);
});