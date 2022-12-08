const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
    let sum = 0
    for(let i=0; i<array.length; i++) {
        let numero = array[i]
        sum += numero
    }
    return sum / array.length
}

console.log(average(numbers))