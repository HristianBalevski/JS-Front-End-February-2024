function findOddOccurs(text) {
    const array = text.split(' ')
    const calculatedWords = {}

    for (word of array) {
        calculatedWords[word.toLowerCase()] = (calculatedWords[word.toLowerCase()] || 0) + 1;
    }

    const entries = Object.entries(calculatedWords)
    const oddWords = entries.filter(word => (word[1] % 2 !== 0)).sort((a, b) => b[1] - a[1])

    const finalResult = []
    for (arr of oddWords) {
        finalResult.push(arr[0])
    }

    return finalResult.join(' ')
}

console.log(findOddOccurs('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
findOddOccurs('Cake IS SWEET is Soft CAKE sweet Food')