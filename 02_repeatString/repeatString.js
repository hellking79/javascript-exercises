const repeatString = function(string,num) {
  let r=``
  if(num<0){
    return `ERROR`
  }
  for(i=0;i<num;i++){
        r+=string
    }
    return r
};

// Do not edit below this line
module.exports = repeatString;
