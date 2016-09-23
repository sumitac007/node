var rect = require('./rectangle-2');

function solveRect(l, b){
  console.log("Solving rectangle L = " + l  + " B =" + b );

  rect(l,b,function(err, rectangle){
    if(err){
        console.log(err);
    }
    console.log("Area of rectangle with L = " + l + " and B = " + "  is " + rectangle.area() + 
     " perimeter is " + rectangle.perimeter());
  });
  console.log(" End of Rect");
}

console.log('Before calling the function');
solveRect(2,3);
solveRect(-1,3);
solveRect(1,5);
console.log('After all function calls');