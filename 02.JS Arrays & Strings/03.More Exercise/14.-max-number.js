function maxNumbers(arr) {
    let maxRight = -Infinity;
    const topIntegers = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxRight) {
            topIntegers.push(arr[i]);
        }
        maxRight = Math.max(maxRight, arr[i]);
    }

    console.log(topIntegers.reverse().join(' '));;
}

maxNumbers([1, 4, 3, 2])
maxNumbers([14, 24, 3, 19, 15, 17])
maxNumbers([41, 41, 34, 20])
maxNumbers([27, 19, 42, 2, 13, 45, 48])