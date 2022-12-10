const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(word, list) {
    let counter = 0;
    for(let i = 0; i < list.length; i++) {
        if (list[i] == word) {
            counter += 1;
        }
    }
console.log(counter)
}


repeatCounter("enjoy", counterWords) 
