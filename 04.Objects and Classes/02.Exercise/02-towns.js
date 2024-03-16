function getTownInfo(input) {
    for (const element of input) {
        const [town, latitudeAsString, longitudeAsString] = element.split(" | ");

        const latitude = parseFloat(latitudeAsString).toFixed(2);
        const longitude = parseFloat(longitudeAsString).toFixed(2);

        const townInfo = { town, latitude, longitude };
        console.log(townInfo);
    }
}


getTownInfo(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])