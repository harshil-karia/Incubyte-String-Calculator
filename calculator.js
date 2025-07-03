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
      //Getting both numbers using indexes  
      const firstNumber = number[0];
      const secondNumber = number[1];

      //Before doing sum we convert the number from string to integer using parseInt() method
      const sum = parseInt(firstNumber) + parseInt(secondNumber);

      return sum;
    }
  }
}

module.exports = { add };
