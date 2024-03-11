function convertToJson(name, lastName, hairColor) {
    let personInfo = {
        name: name,
        lastName, lastName,
        hairColor: hairColor
    }

    let text = JSON.stringify(personInfo)

    return text
}

console.log(convertToJson('George', 'Jones', 'Brown'));