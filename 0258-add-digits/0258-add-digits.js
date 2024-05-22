/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
      while(num >= 10){
        num =  sumOfdigits(num)
      }
      return num
}; 

function sumOfdigits(number) {
  let sum = 0 
  while(number > 0){
    sum += number % 10    
    number = Math.floor(number / 10)
  }
    return sum
}