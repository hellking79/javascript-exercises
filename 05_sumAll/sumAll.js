const sumAll = function(a, b) {
    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      sum += i;
    }
    if (sum < 0) {
      return 'ERROR';
    } else if (typeof a !==`number` || typeof b !==`number`) {
      return 'ERROR';
    }
    return sum;
  };
  
// Do not edit below this line
module.exports = sumAll;
