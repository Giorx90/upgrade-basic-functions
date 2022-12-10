const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(name,list) {
    check = false
    position = 0
    for(let i = 0; i < list.length; i++) {
        if (list[i] == name) {
            check = true
            position = i
                    }
    }
console.log(check.toString() + " " + position)
}


//antes de cerrar la función, añadimos la posición 


finderName("Natasha",nameFinder)

//cómo evitar que de toda la vuelta y me ponga 20 false????