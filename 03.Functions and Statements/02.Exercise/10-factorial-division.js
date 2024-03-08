function factorialDivision(firstNumber, secondNumber) {
    function printDivisionResult(result) {
        return result.toFixed(2);
    }

    function calculateFactorial(num) {
        if (num <= 1) {
            return 1;
        } else {
            return num * calculateFactorial(num - 1);
        }
    }

    const firstFactorial = calculateFactorial(firstNumber);
    const secondFactorial = calculateFactorial(secondNumber);
    const divisionResult = firstFactorial / secondFactorial;
    const finalResult = printDivisionResult(divisionResult);

    return finalResult;
}


console.log(factorialDivision(6, 2));