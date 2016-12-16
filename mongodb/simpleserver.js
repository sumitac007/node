var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url,function(err,db){
	assert.equal(err,null);
	console.log('connected to Database');
	var collection = db.collection('dishes');
	collection.insertOne({name : "Dish1", desc:"desc1"},function(err,result){
		assert.equal(err,null);
		console.log('After insert');
		console.log(result.ops);
		collection.find({}).toArray(function(err,docs){
			assert.equal(err,null);
			console.log("Found:");
			console.log(docs);
			console.log(docs.length);
		});
		db.close();

	});
});