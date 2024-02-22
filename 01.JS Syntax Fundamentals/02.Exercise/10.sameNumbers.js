function sameNumbers(number) {
    let stringNums = number.toString();
    let sameText = true;
    let previousDigit = stringNums[0];
    let totalSum = Number(previousDigit);

    for (let i = 1; i < stringNums.length; i++) {

        if (previousDigit != stringNums[i]) {
            sameText = false
        }
        totalSum += Number(stringNums[i])
    }
    console.log(sameText);
    console.log(totalSum);
}

sameNumbers(2222222)
sameNumbers(1234)