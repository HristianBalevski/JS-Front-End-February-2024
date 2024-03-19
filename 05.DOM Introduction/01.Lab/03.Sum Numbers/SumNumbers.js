function calc() {
    const firstNumberElement = document.getElementById('num1')
    const secondNumberElement = document.getElementById('num2')
    const totalResult = document.querySelector('#sum')

    const firstNumber = Number(firstNumberElement.value)
    const secondNumber = Number(secondNumberElement.value)

    totalResult.value = firstNumber + secondNumber
}
