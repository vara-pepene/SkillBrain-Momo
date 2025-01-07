//Generate a Random Number in a Specified Range

function getRandom(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
