function tryToLogin(array) {
    const username = array.shift()
    const password = username.split('').reverse().join('')

    for (let i = 0; i < array.length; i++) {
        if (array[i] === password) {
            console.log(`User ${username} logged in.`);
        } else if (i === 3) {
            console.log(`User ${username} blocked!`)
        } else {
            console.log(`Incorrect password. Try again.`)
        }
    }
}

// tryToLogin(['Acer', 'login', 'go', 'let me in', 'recA'])
// tryToLogin(['momo', 'omom'])
tryToLogin(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])