const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        let num = array[i]
        if((typeof array[i]) === "number") {
            sum += num
        } else {
            sum += array[i].length
        }
    }
    return sum / array.length
}

console.log(averageWord(mixedElements))