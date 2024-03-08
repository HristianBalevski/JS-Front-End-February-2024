function createMatrix(number) {
    function createRowWithGivenNumber(digit) {
        const row = [];
        for (let i = 0; i < number; i++) {
            row.push(digit);
        }
        return row.join(' ');
    }

    const matrix = [];
    for (let i = 0; i < number; i++) {
        matrix.push(createRowWithGivenNumber(number));
    }

    return matrix.join('\n');
}

console.log(createMatrix(7));