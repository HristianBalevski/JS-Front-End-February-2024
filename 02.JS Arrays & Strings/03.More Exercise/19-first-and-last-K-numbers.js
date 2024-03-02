function solve(array) {
    k = array.shift()

    const originalArray = array.slice()

    const firstElements = array.slice(0, k)
    array = originalArray

    const lastElements = array.slice(-k)

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}

solve([2, 7, 8, 9])
solve([3, 6, 7, 8, 9])
