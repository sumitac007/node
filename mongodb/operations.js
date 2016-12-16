var assert = require('assert');

exports.insertDocument = function(db, collection, document, callback){
	
	var coll = db.collection(collection);
	coll.insert(document, function(err,results){
	assert.equal(err,null);
	console.log(' Inserted ' + results.result.n + ' documents into the collection ' + collection );	
	callback(results);
	});
	
}

exports.findDocument = function(db,collection,callback){
	var coll = db.collection(collection);
	coll.find({}).toArray(function(err, result){
		assert.equal(err,null);
		console.log("Found the document  " + result);
		callback(result);
	});
}


exports.updateDocument = function(db, collection, document, udpate, callback){
	var coll = db.collection(collection);
	coll.updateOne(document, {$set : udpate},null, function(err, results){
		assert.equal(err,null);
		console.log('Updated the document with ' + udpate);
		callback(results);
	});
}

exports.deleteDocument = function(db, collection, document){
	var coll = db.collection(collection);
	coll.deleteOne(document,function(err,results){
		assert.equal(err,null);
		console.log('Deleted the document ' + document);
		callback(results);
	});
}