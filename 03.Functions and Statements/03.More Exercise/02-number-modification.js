function numberModification(input) {
    const arrayOfDigits = input.toString().split('')
    let value = 0;

    function convertStringToIntegers(array) {
        const newArray = array.map(Number)

        return newArray
    }

    function calculateAverageValue(array) {
        const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        value = sum / array.length

    }

    function convertArrayToString(array) {
        const oldArray = array.map(String).join('')

        return oldArray
    }

    while (true) {

        const numbers = convertStringToIntegers(arrayOfDigits)
        calculateAverageValue(numbers)
        if (value > 5) {
            convertArrayToString(numbers)
            return arrayOfDigits.join('')

        }
        arrayOfDigits.push(9)
    }

}

console.log(numberModification(101));
console.log(numberModification(5835))