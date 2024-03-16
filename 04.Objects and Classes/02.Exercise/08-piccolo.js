function recordCar(array) {
    const parking = {};

    for (const data of array) {
        const [command, carNumber] = data.split(', ')

        if (command === 'IN') {
            parking[carNumber] = carNumber
        } else {
            for (const car in parking) {
                if (car === carNumber) {
                    delete parking[carNumber]
                }
            }
        }

    }
    let cars = Object.keys(parking)

    if (cars.length === 0) {
        return "Parking Lot is Empty"
    }

    cars.sort((a, b) => a.localeCompare(b))

    return cars.join('\n')

}


console.log(recordCar(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']));

console.log(recordCar(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']));