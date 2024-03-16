function getStoreProvision(arr1, arr2) {
    const localStore = {};

    for (let i = 0; i < arr1.length; i += 2) {
        const product = arr1[i];
        const quantity = Number(arr1[i + 1]);
        localStore[product] = quantity;
    }

    for (let j = 0; j < arr2.length; j += 2) {
        const product = arr2[j];
        const quantity = Number(arr2[j + 1]);
        localStore[product] = (localStore[product] || 0) + quantity;
    }

    for (const [product, quantity] of Object.entries(localStore)) {
        console.log(`${product} -> ${quantity}`);
    }
}


// getStoreProvision([
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
// ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]);

getStoreProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])