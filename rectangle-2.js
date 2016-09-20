module.exports = function calculateAreaPeriRect(x, y, callback){
  try{

    if(x < 0 || y < 0){
      throw new Error("Lengh or breadth is less than zero Length " + x + " breadth " + y);
    }
    else{
      callback(null, { area : function(){
        return (x*y);
        },
        perimeter : function(){
          return (2*(x+y));
        }

      });

    }

  }
  catch(Excepton){
    console.log(Excepton);
  }

}