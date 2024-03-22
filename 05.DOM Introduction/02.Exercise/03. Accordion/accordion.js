function toggle() {
    const button = document.getElementsByClassName('button')[0]
    const text = document.getElementById('extra')

    if (button.textContent === 'More') {
        text.style.display = 'block'
        button.textContent = 'Less'
    } else {
        button.textContent = 'More'
        text.style.display = 'none'
    }
}