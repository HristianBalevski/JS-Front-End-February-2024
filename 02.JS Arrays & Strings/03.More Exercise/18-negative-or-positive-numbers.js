function solve(array) {
    array = array.map(Number)
    let newArray = [];

    for (const number of array) {
        if (number < 0) {
            newArray.unshift(number)
        } else {
            newArray.push(number)
        }
    }
    return newArray.join('\n')
}

// console.log(solve(['7', '-2', '8', '9']));
console.log(solve(['3', '-2', '0', '-1']));