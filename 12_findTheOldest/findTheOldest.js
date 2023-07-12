const findTheOldest = people.reduce(oldest,age);=>{
  if(!oldest|| (oldest.yearOfDeath-oldest.yearOfBirth)>(age.yearOfDeath-age.yearOfBirth)){
    return oldest} else{
      return age
    }
};
// Do not edit below this line
module.exports = findTheOldest;
