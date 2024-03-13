function saveInformation(input) {
    let addressBook = {};

    for (const text of input) {
        const [name, address] = text.split(':')
        addressBook[name] = address
    }

    const keyValue = Object.entries(addressBook);

    keyValue.sort(([firstName], [secondName]) => firstName.localeCompare(secondName));

    const sortedPeople = Object.fromEntries(keyValue);
    const entries = Object.entries(sortedPeople)

    for (const person of entries) {
        console.log(`${person[0]} -> ${person[1]}`)
    }

}

saveInformation(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);