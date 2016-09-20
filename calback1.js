var fs = require('fs');
var number = undefined;
console.log("First line");
function addOne(fileName){
	fs.readFile(fileName, function calBak(err, contents){
		console.log("Inside the functino ");
		if(err){
			console.log(err);
		}

		else{
			number = contents + 1;

		}
		console.log(" Inside function  " + number);
	});
}

addOne("./test1.txt");
console.log("Outside function "  +  number);
console.log("Last Line");