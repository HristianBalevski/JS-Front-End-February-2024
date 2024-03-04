function bitcoinMining(array) {
    let totalBitcoins = 0;
    let firstPurchase = 0;
    let totalMoney = 0;

    for (let i = 0; i < array.length; i++) {
        let currentDay = i + 1
        let dailyGold = array[i]

        if (currentDay % 3 === 0) {
            dailyGold *= 0.70
        }

        totalMoney += dailyGold * 67.51

        if (totalMoney >= 11949.16) {

            if (firstPurchase === 0) {
                firstPurchase = currentDay
            }

            while (totalMoney >= 11949.16) {
                totalBitcoins += 1
                totalMoney -= 11949.16
            }
        }

    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (firstPurchase > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

// bitcoinMining([100, 200, 300])
// bitcoinMining([50, 100])
bitcoinMining([3124.15, 504.212, 2511.124])