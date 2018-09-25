module.exports = function getZerosCount(number, base) {
  
  let power, 
      zerosCount = number;

  //divide base-number in prime(simple) factors
  for (let i=2; i<=base; i++) {
    
    if (base % i == 0){
      power = 0;
    //find power for each factor (i)  
      while (base % i == 0){
        power++;
        base /= i;
      }
      let counter=0;
      let numberTemp = number;
      //count the number of factors in factorial
      while (numberTemp / i > 0){
        counter += Math.floor(numberTemp/i);
        numberTemp = Math.floor(numberTemp/i);
      }
      
      if (zerosCount > Math.floor(counter/power)) zerosCount = Math.floor(counter/power);
    }
  }
  return zerosCount;
}