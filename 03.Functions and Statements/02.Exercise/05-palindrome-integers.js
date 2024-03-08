function findPalindromes(input) {
    function reverseNumber(number) {
        const reversedNumber = number.toString().split('').reverse().join('');

        return reversedNumber
    }

    function checkForPalindrome(array) {
        let output = []

        for (let element of array) {
            const potentialPalindrome = Number(reverseNumber(element))

            if (element === potentialPalindrome) {
                output.push('true')
            } else {
                output.push('false')
            }
        }

        return output.join('\n')
    }

    return checkForPalindrome(input)
}

console.log(findPalindromes([123, 323, 421, 121]));
console.log(findPalindromes([32, 2, 232, 1010]))