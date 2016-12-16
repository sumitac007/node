var MongoClient = require('mongodb').MongoClient;
var assert =  require('assert');
var operations = require('./operations');

var url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, function(err,db){
	operations.insertDocument(db,"dishes",{ name:"vadabav1" , desc:"indian"},function(result){
		console.log(result);

		operations.findDocument(db,"dishes",function(results){
			console.log(results);
		});

		operations.updateDocument(db,"dishes",{ name:"vadabav1" , desc:"indian"} )

	});

});
