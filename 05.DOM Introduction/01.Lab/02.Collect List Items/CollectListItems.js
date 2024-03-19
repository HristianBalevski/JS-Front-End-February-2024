function extractText() {
    const itemElements = document.getElementById('items')
    const elementFromTextArea = document.getElementById('result')

    elementFromTextArea.value = itemElements.textContent
}