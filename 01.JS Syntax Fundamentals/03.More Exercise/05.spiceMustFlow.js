function spiceFlow(startingYield) {
    let totalSpices = 0;
    let totalDays = 0;

    while (startingYield >= 100) {
        totalSpices += startingYield


        if
            (totalSpices >= 26) {
            totalSpices -= 26
        } else {
            totalSpices = 0
        }

        startingYield -= 10
        totalDays += 1
    }
    if
        (totalSpices >= 26) {
        totalSpices -= 26
    } else {
        totalSpices = 0
    }

    console.log(totalDays);
    console.log(totalSpices)
}

spiceFlow(111)
spiceFlow(450)
spiceFlow(99)