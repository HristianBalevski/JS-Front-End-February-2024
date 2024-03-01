function countOccurrences(text, word) {
    let result = 0;
    let array = text.split(' ')

    for (const element of array) {
        if (element === word) {
            result += 1
        }
    }
    return result
}

/* function countOccurrences(text, word) {
    const array = text.split(' ');
    const occurrences = array.filter(element => element === word);
    return occurrences.length;
}
 */

console.log(countOccurrences('This is a word and it also is a sentence',
    'is'));