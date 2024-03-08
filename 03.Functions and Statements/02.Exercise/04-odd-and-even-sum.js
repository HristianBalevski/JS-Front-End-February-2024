function calculateOddAndEvenSum(input) {
    function convertNumberToString(number) {
        const convertedNumber = number.toString();

        return convertedNumber.split('')
    }

    function findOddAndEvenSum(array) {
        array = array.map(Number)

        let oddSum = array.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
        let evenSum = array.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);

        return [oddSum, evenSum];
    }

    function printTotalSums(firstSum, secondSum) {
        return `Odd sum = ${firstSum}, Even sum = ${secondSum}`
    }

    const currentNumberAsArray = convertNumberToString(input)
    const [sum1, sum2] = findOddAndEvenSum(currentNumberAsArray)

    return printTotalSums(sum1, sum2)
}

console.log(calculateOddAndEvenSum(1000435));
console.log(calculateOddAndEvenSum(3495892137259234))