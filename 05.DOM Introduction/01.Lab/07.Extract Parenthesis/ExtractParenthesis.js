function extract(content) {
    const contentElement = document.getElementById('content')
    const matches = contentElement.textContent.matchAll(/\((.*?)\)/g)

    const arrayResult = Array.from(matches)
    const output = [];

    for (const element of arrayResult) {
        output.push(element[1])
    }

    return output.join('; ')
}