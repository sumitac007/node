var fs = require('fs');

console.log("First line");
fs.readFile('H:/node/node/test.txt',function(err, data){
	console.log(data);
});
console.log("Last Line");