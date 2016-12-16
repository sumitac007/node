var mongoose = require('mongoose'), assert  = require('assert');
var Dishes = require('./models/dishes-1');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console,'Connection Error: '));

db.once('open',function(){
	var newDish = Dishes({
		name:"Dosa",
		description:"SouthIndin"
	});

	newDish.save(function(err){
		if(err) throw err;

		console.log('Dish Created!');

		Dishes.find({},function(err, result){
			if(err) throw err;

			console.log('Dishe is : ' + result);	
		});

	});
});