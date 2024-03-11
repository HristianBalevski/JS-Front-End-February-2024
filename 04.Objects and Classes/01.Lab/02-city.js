function printCityInfo(obj) {
    const currentObject = Object.entries(obj)

    for (let array of currentObject) {
        console.log(`${array[0]} -> ${array[1]}`);
    }
}

printCityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})