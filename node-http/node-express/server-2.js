var express = require('express');
var morgan = require('morgan');

var hostname = 'pneitsh61925d';
var port = '3000';


var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.listen(port,hostname,function(){
    console.log('Server running on ' + hostname + ' and port ' + port  );

});