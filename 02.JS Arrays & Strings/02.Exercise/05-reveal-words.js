function solve(words, template) {
    words = words.split(', ')
    template = template.split(' ')

    for (let i = 0; i < template.length; i++) {
        if (template[i].includes('*')) {

            for (let j = 0; j < words.length; j++) {
                if (words[j].length === template[i].length) {
                    template.splice(i, 1, words[j])
                }
            }
        }
    }

    return template.join(' ')
}

console.log(solve('great',
    'softuni is ***** place for learning new programming languages'))


console.log(solve('great, learning',
    'softuni is ***** place for ******** new programming languages'));