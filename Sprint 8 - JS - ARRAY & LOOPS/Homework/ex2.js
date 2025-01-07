//Calculate the sum of numbers in an array

function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
