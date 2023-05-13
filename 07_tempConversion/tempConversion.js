const convertToCelsius = function(f,c) {
  let cel =(c*9/5)+32;
  let roundec=Math.round(cel*10)/10
 
  let fell =(f-32)* 5/9
  let roundef=Math.round(fell*10)/10
  return roundec,roundef;
  
  //{celsuis:roundec,
  //farenheit:roundef}; 
   

};

const convertToFahrenheit = function(c) {
  let fell =(c*9/5)+32;
  let roundef=Math.round(fell*10)/10;
  return roundef;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
