function equalArrays(firstArr, secondArr) {
    let equals = true
    let totalSum = 0;

    for (let index = 0; index < firstArr.length; index++) {

        let num1 = Number(firstArr[index])
        let num2 = Number(secondArr[index])

        if (num1 !== num2) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            equals = false
            break;
        } else {
            totalSum += num1
        }
    }

    if (equals) {
        console.log(`Arrays are identical. Sum: ${totalSum}`)
    }

}

equalArrays(['10', '20', '30'], ['10', '20', '30'])
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])