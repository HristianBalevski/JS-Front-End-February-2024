function reversedChars(char1, char2, char3) {
    let text = char1 + char2 + char3;
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i] + ' ';
    }
    console.log(reversed.trim());
}

reversedChars('A', 'B', 'C')