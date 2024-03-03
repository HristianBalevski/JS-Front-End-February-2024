function sorting(array) {
    array = array.sort((a, b) => a - b)
    let sortedNumbers = [];

    while (true) {
        let smallestNumber = array.shift()
        let biggestNumber = array.pop()

        if (!biggestNumber) {
            sortedNumbers.push(smallestNumber)
            break;

        } else {
            sortedNumbers.push(smallestNumber)
            sortedNumbers.push(biggestNumber)
        }
    }

    return sortedNumbers
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));