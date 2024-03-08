function generateSequenceBetweenChars(first, second) {
    function convertCharacterToNumber(char) {
        return char.charCodeAt(0);
    }

    function findStartAndEnd(first, second) {
        const a = convertCharacterToNumber(first);
        const b = convertCharacterToNumber(second);

        return a > b ? [b, a] : [a, b];
    }

    function generateSequenceBetween(start, end) {
        const sequence = [];

        for (let i = start + 1; i < end; i++) {
            sequence.push(String.fromCharCode(i));
        }

        return sequence.join(' ');
    }

    const [start, end] = findStartAndEnd(first, second);
    return generateSequenceBetween(start, end);
}

console.log(generateSequenceBetweenChars('#', ':'));

