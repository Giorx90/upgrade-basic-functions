const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
    let longestWord = "";
    for(let i = 0; i < array.length; i++) {
        if (longestWord.length < array[i].length) {
            longestWord = array[i];
        } else {
            i++
        }
    }
    return longestWord
}

console.log(findLongestWord(avengers))