function calculateThePrice(product, quantity) {

    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    let price = 0;

    if (product === 'coffee') {
        price = coffeePrice * quantity
    }

    if (product === 'water') {
        price = waterPrice * quantity
    }

    if (product === 'coke') {
        price = cokePrice * quantity
    }

    if (product === 'snacks') {
        price = snacksPrice * quantity
    }

    return price.toFixed(2)
}

console.log(calculateThePrice("coffee", 2));