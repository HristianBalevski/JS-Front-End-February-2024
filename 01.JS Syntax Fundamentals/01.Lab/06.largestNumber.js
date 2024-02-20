function largestNumber(number1, number2, number3) {

    let array = [number1, number2, number3]
    let result = Number.NEGATIVE_INFINITY

    for (let i = 0; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i]
        }
    }
    console.log(`The largest number is ${result}.`);
}

largestNumber(5, -3, 16)  // -3, -5, -22.5 //
