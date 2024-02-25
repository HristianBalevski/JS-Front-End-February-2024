function mergeArrays(firstArray, secondArray) {
    let thirdArray = [];

    for (let i = 0; i < firstArray.length; i++) {

        if (i % 2 === 0) {
            let number = Number(firstArray[i]) + Number(secondArray[i])
            thirdArray.push(number)
        } else {
            let concatenation = firstArray[i] + secondArray[i]
            thirdArray.push(concatenation)
        }
    }
    console.log(thirdArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])