function sumElements(arr) {
    arr = arr.map(Number)
    const firstNum = arr.shift()
    const lastNum = arr.pop()

    console.log(firstNum + lastNum);
}

sumElements([20, 30, 40])