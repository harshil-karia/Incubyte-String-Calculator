function add(numbers) {
  if (numbers.length == 0) {
    // If no number is passed as input then returning 0
    return 0;
  } else {
    //Getting all the numbers which are seprated by comma(,)
    const number = numbers.split(",");

    // If there is only one number then return it
    if (number.length == 1) {
      return parseInt(number[0]);
    } else {
      
      //Adding all the number passed where currentSum is initalized with 0.
      const totalSum = number.reduce((currentSum,currentNumber) => {
        return currentSum + parseInt(currentNumber);
      },0)
      
      return totalSum;
    }
  }
}

module.exports = { add };
