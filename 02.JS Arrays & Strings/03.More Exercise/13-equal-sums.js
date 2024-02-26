function equalSums(arr) {
    let thereIsResult = false

    for (let i = 0; i < arr.length; i++) {
        let leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
        let rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);

        if (leftSum === rightSum) {
            thereIsResult = true
            console.log(i);
        }
    }
    if (!thereIsResult) {
        console.log("no")
    }

}


// equalSums([1, 2, 3, 3])
// equalSums([1, 2])
// equalSums([1])
// equalSums([1, 2, 3])
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])