function sumEvenAndOdd(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (const number of arr) {

        if (number % 2 === 0) {
            sumEven += number
        } else {
            sumOdd += number
        }
    }

    const result = sumEven - sumOdd
    console.log(result);
}

sumEvenAndOdd([3, 5, 7, 9])