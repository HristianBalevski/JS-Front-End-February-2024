function multiplication(number) {
    let times = 10

    for (let i = 1; i <= times; i++) {
        let result = number * i
        console.log(`${number} X ${i} = ${result}`);
    }
}

multiplication(5)
