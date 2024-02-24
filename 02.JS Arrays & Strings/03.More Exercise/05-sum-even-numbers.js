function sumEvenNumbers(arr) {
    let totalSum = 0;

    for (const element of arr) {

        const currentNumber = Number(element)

        if (currentNumber % 2 === 0) {
            totalSum += currentNumber
        }
    }
    console.log(totalSum);
}

sumEvenNumbers(['1', '2', '3', '4', '5', '6'])