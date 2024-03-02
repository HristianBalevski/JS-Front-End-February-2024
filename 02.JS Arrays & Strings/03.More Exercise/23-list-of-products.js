function solve(array) {
    const result = array.sort();

    for (let i = 0; i < result.length; i++) {
        console.log(`${i + 1}.${result[i]}`);
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
