function censoredWords(text, word) {

    const regex = new RegExp(word, 'g');
    const replacedText = text.replace(regex, '*'.repeat(word.length));

    return replacedText;
}

console.log(censoredWords('A small sentence with some words', 'small'));
