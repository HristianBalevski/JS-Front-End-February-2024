function solve(a, b, c) {
    let sumResult = sum(a, b)
    console.log(subtract(sumResult, c));

    function sum(a, b) {
        return a + b;
    }

    function subtract(result, number) {
        return result - number
    }
}

solve(23, 6, 10)
solve(1, 17, 30)