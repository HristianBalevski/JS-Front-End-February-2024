function reverseArray(number, arr) {
    let newArray = [];
    let counter = 0;

    for (const element of arr) {

        newArray.unshift(element)
        counter++

        if (counter === number) { break; }
    }

    console.log(newArray.join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50])