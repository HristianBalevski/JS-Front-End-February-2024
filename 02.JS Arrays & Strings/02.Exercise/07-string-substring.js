function solve(word, text) {
    text = text.split(' ')
    let iFoundTheWord = false

    for (element of text) {
        if (element.toLowerCase() === word) {
            console.log(word);
            iFoundTheWord = true
            break;
        }
    }

    if (!iFoundTheWord) {
        console.log(`${word} not found!`)
    }

}

// function solve(word, text) {
//     const words = text.split(' ');
//     const lowerCaseWord = word.toLowerCase();
//     const foundIndex = words.findIndex(element => element.toLowerCase() === lowerCaseWord);

//     if (foundIndex !== -1) {
//         console.log(word);
//     } else {
//         console.log(`${word} not found!`);
//     }
// }


solve('javascript', 'JavaScript is the best programming language')
solve('python',
    'JavaScript is the best programming language')