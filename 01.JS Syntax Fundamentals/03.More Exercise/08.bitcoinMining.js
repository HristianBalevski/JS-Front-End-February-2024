function bitcoin(input) {
    const bitcoinPrice = 11949.16;
    const gramGold = 67.51;
    const len = input.length
    let myMoney = 0;
    let totalBitcoins = 0;
    let firstBitcoin = 0;
    let totalDays = 0;

    for (let i = 0; i < len; i++) {
        let currentDay = i + 1

        if (currentDay % 3 === 0) {
            input[i] *= 0.70
        }
        let exchange = input[i] * gramGold
        myMoney += exchange

        if (myMoney >= bitcoinPrice) {
            if (firstBitcoin === 0) {
                firstBitcoin = currentDay
            }

            while (myMoney >= bitcoinPrice) {
                totalBitcoins += 1
                myMoney -= bitcoinPrice
            }

        }
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`)
    }
    console.log(`Left money: ${myMoney.toFixed(2)} lv.`)
}

bitcoin([100, 200, 300])
bitcoin([50, 100])
bitcoin([3124.15, 504.212, 2511.124])