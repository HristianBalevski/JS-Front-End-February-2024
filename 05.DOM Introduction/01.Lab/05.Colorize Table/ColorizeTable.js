function colorize() {
    const evenElements = document.querySelectorAll('table tr:nth-child(2n)')

    for (const element of evenElements) {
        element.style.backgroundColor = 'teal'
    }
}