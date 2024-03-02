function solve(array) {
    let oddNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            result = array[i] * 2
            oddNumbers.push(result)
        }
    }

    return oddNumbers.reverse().join(' ')
}

console.log(solve([3, 0, 10, 4, 7, 3]));