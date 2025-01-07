//Add Unlimited Numbers

function addNumber(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
