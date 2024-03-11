function convertToObject(textAsJson) {
    let obj = JSON.parse(textAsJson)
    let currentObject = Object.entries(obj)

    for (let array of currentObject) {
        console.log(`${array[0]}: ${array[1]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')