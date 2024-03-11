function storeBookInformation(array) {
    let phoneBook = {};

    for (let text of array) {
        let [name, phone] = text.split(' ')
        phoneBook[name] = phone
    }

    let info = Object.entries(phoneBook)

    for (let keyValue of info) {
        console.log(`${keyValue[0]} -> ${keyValue[1]}`);
    }
}

storeBookInformation(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);