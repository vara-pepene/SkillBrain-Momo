//Create a function that returns an integer representing the number of vowels found in a string

function countVowels(inputString) {
    let count = 0;
    const vowelList = 'aeiouAEIOU';

    for (let char of inputString) {
        if (vowelList.includes(char)) {
            count++;
        }
    }

    return count;