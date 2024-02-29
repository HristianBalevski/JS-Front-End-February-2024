function substring(word, num1, num2) {
    const result = word.substring(num1, num1 + num2)

    return result
}

console.log(substring('ASentence', 1, 8));
console.log(substring('SkipWord', 4, 7));