function solve(array) {
    array = array.sort((a, b) => a.localeCompare(b))
    let output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(`${i + 1}.${array[i]}`)
    }

    return output.join('\n')
}

console.log(solve(["John", "Bob", "Christina", "Ema"]));