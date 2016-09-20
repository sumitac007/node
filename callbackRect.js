var fs = require('fs');
console.log('First Line');
var fileNumber;
var area ;
var perimeter ;
function solveRect(l,b,calback){
	if( l < 0 || b < 0){
		return calback(new Error("Lenght or breadth is less than 0"));
	}
	else{
		var data = fs.readFileSync('./test1.txt');
		perimeter = 2*(l+b);
		calback(null, fileNumber, perimeter); 
	}
}

solveRect(2,3, function (err,area, perimeter){
	console.log("Inside solveRect");
	if(err){
		console.log(err);
	}
	else{
		console.log(" Area " + area + " perimeter" + perimeter);
	}
	console.log("End of solveRect");
});

console.log("last Line");
