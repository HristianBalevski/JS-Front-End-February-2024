function checkRemainingTime(input) {
    function calculateCompletedPercentage(data) {
        const completedTime = data / 10

        return `${data}% [${'%'.repeat(completedTime)}${'.'.repeat(10 - completedTime)}]`
    }

    function printInformation(number) {
        if (number < 100) {
            return `Still loading...`
        }

        return `Complete!`
    }

    const percentage = calculateCompletedPercentage(input)
    const message = printInformation(input)

    return [percentage, message].join('\n')
}

console.log(checkRemainingTime(30));
console.log(checkRemainingTime(50));
console.log(checkRemainingTime(100));