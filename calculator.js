function add(numbers) {
  if (numbers.length == 0) {
    // If no number is passed as input then returning 0
    return 0;
  } else {
    //Made new-line and comma as default delimeter
    let delimiterList = [",", "\n"];;
    let numberString = numbers;

    // Check if custom delimiter is specified at the beginning
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n"); //End of custom delimeter
      const delimiterDefinition = numbers.substring(2, delimiterEndIndex); // Get the custom delimeter

      //Check if multiple delimeter is used or not
      if (delimiterDefinition.includes("[") && delimiterDefinition.includes("]")) {

        const delimiters = [...delimiterDefinition.matchAll(/\[(.*?)\]/g)].map(m => m[1]); //Find all the delimeters
        
        //List of all delimeters
        delimiterList = delimiters.map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

      } else {

        // Go with single character delimeter
        if (delimiterDefinition.length !== 1) {
          throw new Error("Only single-character delimiters are allowed."); //The delimeter should be of single character
        }

        delimiterList = [delimiterDefinition.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")];
        
      }
      numberString = numbers.substring(delimiterEndIndex + 1);
    }

    //Regex to split the numbers
    const splitRegex = new RegExp(delimiterList.join("|"));

    // Spliting numbers using all delimeters
    const arrayOfNumbers = numberString.split(splitRegex);

    const number = arrayOfNumbers.map((n) => parseInt(n)); //Convert the number from string format to integer

    //Filtered the negative numbers and stored them
    const negativeNumbers = number.filter((currentNumber) => currentNumber < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        "negative numbers not allowed. The negative number inputed are " +
          negativeNumbers.join(",")
      ); //
    }

    //Filter the numbers and ignore numbers greater than 1000
    const validNumbers = number.filter(
      (currentNumber) => currentNumber <= 1000
    );

    // If there is only one number then return it
    if (validNumbers.length == 1) {
      return validNumbers[0];
    } else {
      //Adding all the number passed where currentSum is initalized with 0.
      const totalSum = validNumbers.reduce((currentSum, currentNumber) => {
        return currentSum + currentNumber;
      }, 0);

      return totalSum;
    }
  }
}

module.exports = { add };
