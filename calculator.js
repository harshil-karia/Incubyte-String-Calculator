function add(numbers) {
  if (numbers.length == 0) {
    // If no number is passed as input then returning 0
    return 0;
  } else {
    //Else returning value when only 1 number is passed
    const value = parseInt(numbers);
    return value;
  }
}

module.exports = { add };
