function solve(input) {
    let encodedMessage = input.shift();

    while (true) {
        const line = input.shift();

        if (line === "Buy") {break}
        else {
            const data = line.split("?");

            let newMessage = "";

            if (data[0] === "TakeEven") {

                for (let i = 0; i < encodedMessage.length; i++) {
                    if (i % 2 === 0) {
                        newMessage += encodedMessage[i];
                    }

                }
                encodedMessage = newMessage;
                console.log(encodedMessage);
            } else if (data[0] === "ChangeAll") {
                const substring = data[1];
                const replacement = data[2];

                const regex = new RegExp(substring, 'g');
                encodedMessage = encodedMessage.replace(regex, replacement)

                console.log(encodedMessage);

            }
            else if (data[0] === "Reverse") {
                const substring = data[1];

                const index = encodedMessage.indexOf(substring);
                if (index !== -1) {
                    const removedSubstring = encodedMessage.substring(index, index + substring.length);
                    let firstPart = encodedMessage.split('').slice(0, index).join('');
                    let secondPart = encodedMessage.split('').slice(index + substring.length).join('');
                    encodedMessage = firstPart + secondPart;
                    const reversedSubstring = removedSubstring.split('').reverse().join('');

                    encodedMessage = encodedMessage + reversedSubstring;
                    console.log(encodedMessage);
            }else {
                    console.log("error")
                }
        }
    }

}
    console.log(`The cryptocurrency is: ${encodedMessage}`)
}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]))