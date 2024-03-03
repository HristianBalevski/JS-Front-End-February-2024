function splitter(text) {
    const regex = /(?=[A-Z])/

    const words = text.split(regex).join(', ');

    return words

}

console.log(splitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));