function printAndSum(firstNumber, secondNumber) {
    let totalSum = 0
    let output = ""

    for (let i = firstNumber; i <= secondNumber; i++) {
        totalSum += i
        output += i + " "
    }
    console.log(output)
    console.log(`Sum: ${totalSum}`)
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)