// Create a function that checks whether a number is divisible by 10 or not (a number is divisible by 10 if its last digit is 0)

function isDivisibleBy10(number) {
  if (number % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
