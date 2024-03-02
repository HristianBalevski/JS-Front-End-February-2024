function solve(input) {
    let array = input.shift().split(' ')

    for (let info of input) {
        let tokens = info.split(' ')
        let command = tokens.shift()

        if (command === 'Add') {
            let number = tokens.shift()
            array.push(number)
        } else if (command === 'Remove') {
            let number = tokens.shift()

            for (let j = 0; j < array.length; j++) {
                let index = array.indexOf(number)

                if (index >= 0) {
                    array.splice(index, 1)
                }
            }
        } else if (command === 'RemoveAt') {
            let index = tokens.shift()
            array.splice(index, 1)
        } else {
            let number = tokens.shift()
            let index = tokens.shift()

            array.splice(index, 0, number)
        }
    }
    console.log(array.join(' '));

}

// solve(['4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',
//     'Insert 8 3'])

solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])