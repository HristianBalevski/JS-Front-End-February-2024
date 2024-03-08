function passwordValidator(input) {
    function checkTheLengthOfTheString(text) {
        if (text.length < 6 || text.length > 10) {
            return 'Password must be between 6 and 10 characters'
        }
        return ''
    }

    function checkIfTheStringIsAlphaNumeric(text) {
        const regex = /^[a-zA-Z0-9]+$/;

        if (!regex.test(text)) {
            return `Password must consist only of letters and digits`
        }
        return ''
    }

    function checkForAtLeastTwoDigits(text) {
        const regex = /.*\d.*\d.*/;

        if (!regex.test(text)) {
            return `Password must have at least 2 digits`
        }
        return ''
    }

    const firstCheck = checkTheLengthOfTheString(input)
    const secondCheck = checkIfTheStringIsAlphaNumeric(input)
    const thirdCheck = checkForAtLeastTwoDigits(input)

    const allChecks = [firstCheck, secondCheck, thirdCheck]
    let finalResult = []

    if (allChecks.every(str => str === '')) {
        finalResult.push(`Password is valid`)
    } else {
        for (message of allChecks) {
            if (message !== '') {
                finalResult.push(message)
            }
        }
    }

    return finalResult.join('\n')
}

console.log(passwordValidator('login'));
console.log(passwordValidator('MyPass123'));
console.log(passwordValidator('Pa$s$s'));