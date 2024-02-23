function triangle(size) {
    let newString = ''
    for (let i = 1; i <= size; i++) {
        newString = String(i) + ' '
        console.log(newString.repeat(i));
    }
}

triangle(3)
triangle(5)
triangle(6)