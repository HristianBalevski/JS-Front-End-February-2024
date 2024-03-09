function carWash(input) {
    let totalValue = 0;

    function useSoap(value) {
        return value += 10
    }

    function useWater(value) {
        return value *= 1.20
    }

    function vacuumCleaner(value) {
        return value *= 1.25
    }

    function hasMud(value) {
        return value *= 0.90
    }

    function printMessage(value) {
        return `The car is ${value.toFixed(2)}% clean.`
    }

    function calculateTotalValue(data) {
        for (command of data) {
            switch (command) {
                case 'soap':
                    totalValue = useSoap(totalValue);
                    break;
                case 'water':
                    totalValue = useWater(totalValue);
                    break;
                case 'vacuum cleaner':
                    totalValue = vacuumCleaner(totalValue);
                    break;
                case 'mud':
                    totalValue = hasMud(totalValue);
                    break;
            }
        }
    }

    calculateTotalValue(input)
    const message = printMessage(totalValue)

    return message
}

// console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
console.log(carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]));