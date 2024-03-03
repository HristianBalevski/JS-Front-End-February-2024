function hashTagRegex(text) {
    const regex = /#\b[a-zA-Z]+\b/g;
    const matches = text.match(regex);

    for (word of matches) {
        word = word.substring(1)

        console.log(word);
    }
}

hashTagRegex('Nowadays everyone uses # to tag a #special word in #socialMedia')
hashTagRegex('The symbol # is known #variously in English-speaking #regions as the #number sign')