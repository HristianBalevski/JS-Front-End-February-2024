function sumDigits(number) {
    let num = number.toString();
    let totalSum = 0

    for (let i = 0; i < num.length; i++) {
        totalSum += parseInt(num[i])
    }
    console.log(totalSum);
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)