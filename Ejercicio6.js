"use strict";

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function findDuplicates(array) {
    for(let i=array.length; i>=0; i--) {
        let item = array[i];
        let duplicate = false;
        for (let j=0; j<array.length; j++) {
            let item2 = array[j];
            if (item == item2 && i != j) {
                duplicate = true;
            }
        }
        if (duplicate == true) {
            array.splice(i, 1);
        }
    }
    return array
}

console.log(findDuplicates(duplicates))