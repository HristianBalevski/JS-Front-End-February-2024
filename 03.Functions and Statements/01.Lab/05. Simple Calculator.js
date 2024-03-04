function calculate(firstNum, secondNum, operator) {
    const calculator = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b
    };

    if (operator in calculator) {
        return calculator[operator](firstNum, secondNum)
    }

}

console.log(calculate(5, 5, "multiply"));

