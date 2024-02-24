function condense(arr) {

    while (true) {

        let totalArray = [];

        if (arr.length === 1) {
            console.log(arr[0])
            break;
        }


        for (let i = 0; i < arr.length - 1; i++) {

            const firstNumber = arr[i];
            const secondNumber = arr[i + 1];

            totalArray.push(firstNumber + secondNumber)

        }
        arr = [...totalArray];


    }

}


condense([2, 10, 3])
condense([5, 0, 4, 1, 2])
condense([1])