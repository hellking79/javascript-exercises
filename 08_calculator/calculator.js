const add = function(a,b) {
  let cal= a+b;
  return cal;
	
};

const subtract = function(a,b) {
  let cal=a-b;
  return cal;
	
};


const sum = function(a) {
 let cal= a.reduce(add,0)
  return cal;
	};

 const multiply = function(a) {
if (a.length===0){
  return 0;
}
let result=1;

for(i=0;i<a.length;i++){
result*=a[i]
}
return result;
};


  

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
