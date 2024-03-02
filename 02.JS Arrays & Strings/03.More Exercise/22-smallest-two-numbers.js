function solve(array) {
    const sorted = array.sort((a, b) => a - b);
    const result = sorted.slice(0, 2)

    return result.join(' ')
}

console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]))