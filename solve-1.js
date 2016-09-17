var rect = require('./rect-1');

function solveRect(l,b){

	console.log("Solving Rectangle ...");

	if(l<0 || b < 0){
		console.log("Lenght or breadth is less than 0");
	}
	else {
		console.log("Area of the rectange is  " + rect.area(l,b) + " and perimeter is " + rect.perimeter(l,b) );
	}

}	
solveRect(1,2);
solveRect(-1,2);