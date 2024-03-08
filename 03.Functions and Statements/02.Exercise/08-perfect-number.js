function findPerfectNumber(input) {
    function divideTheNumber(number) {
        const allDivisors = [];

        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                allDivisors.push(i)
            }
        }

        return allDivisors
    }

    function calculateTheSumOfTheArray(array) {
        const result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        return result
    }

    const divisors = divideTheNumber(input);
    const totalSum = calculateTheSumOfTheArray(divisors)

    if (input === totalSum) {
        return `We have a perfect number!`
    }

    return `It's not so perfect.`

}

console.log(findPerfectNumber(6));
console.log(findPerfectNumber(28));
console.log(findPerfectNumber(1236498));