function addAndSubtract(arr) {
    const initialValue = 0;
    const oldSum = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i]

        if (currentNumber % 2 === 0) {
            newArray.push(currentNumber + i)
        } else {

            newArray.push(currentNumber - i)
        }
    }

    const newSum = newArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    console.log(newArray);
    console.log(oldSum);
    console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])