function login(input) {
    let username = input[0];
    let counter = 0;

    for (let i = 1; i < input.length; i++) {
        const password = input[i].split('').reverse().join('')

        if (username === password) {
            if (counter === 4) {
                console.log(`User ${username} blocked!`)
            } else {
                console.log(`User ${username} logged in.`);
            }
        } else {
            counter += 1
            if (counter === 4) {
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log('Incorrect password. Try again.')
        }
    }
}

// login(['Acer', 'login', 'go', 'let me in', 'recA'])
// login(['momo', 'omom'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])