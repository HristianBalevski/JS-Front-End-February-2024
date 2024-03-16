function calculateOccurrences(input) {
    const searchedWords = input
        .shift()
        .split(' ')
        .reduce((result, word) => {
            result[word] = 0;

            return result;

        }, {});

    // const mapper = {};

    // for (w of searchedWords) {
    //     mapper[w] = 0;
    // }

    for (word of input) {
        if (mapper.hasOwnProperty(word)) {
            mapper[word] += 1
        }
    }


    const entries = Object.entries(mapper)
    const sortedWords = entries.sort((a, b) => b[1] - a[1])
    sortedWords.forEach(word => console.log(`${word[0]} - ${word[1]}`))
}

calculateOccurrences([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

calculateOccurrences([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])