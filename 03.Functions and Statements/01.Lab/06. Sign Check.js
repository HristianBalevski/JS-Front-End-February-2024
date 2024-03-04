function checkTheResult(firstNum, secondNum, thirdNum) {

    let negativeCount = 0;


    if (firstNum < 0) negativeCount++;
    if (secondNum < 0) negativeCount++;
    if (thirdNum < 0) negativeCount++;


    if (negativeCount % 2 === 0) {
        return "Positive";
    } else {
        return "Negative";
    }
}

console.log(checkTheResult(5, 12, -15));
console.log(checkTheResult(-6, -12, 14));
console.log(checkTheResult(-1, -2, -3));
console.log(checkTheResult(-5, 1, 1));