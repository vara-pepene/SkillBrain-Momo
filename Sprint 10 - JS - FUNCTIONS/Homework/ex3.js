//Find the Number of Occurrences of a Letter in a String

function letterCount(string, letter) {
  string = string.toLowerCase();
  letter = letter.toLowerCase();
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++; //
    }
  }

  return count;
}
