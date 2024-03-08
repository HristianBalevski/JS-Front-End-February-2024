
function printResult(...array) {
    const result = findTheSmallestNum(array)

    console.log(result);

    function findTheSmallestNum(sequence, initialNumber = Number.MAX_SAFE_INTEGER) {
        for (let number of sequence) {
            if (number < initialNumber) {
                initialNumber = number
            }
        }

        return initialNumber
    }
}
printResult(2, 5, 3)
