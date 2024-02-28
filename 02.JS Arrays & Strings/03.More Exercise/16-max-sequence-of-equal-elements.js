function longestSequence(arr) {
    let maxLength = 0;
    let maxElement = arr[0];
    let currentLength = 1;
    let currentElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxElement = currentElement;
            }
            currentLength = 1;
            currentElement = arr[i];
        }
    }

    if (currentLength > maxLength) {
        maxLength = currentLength;
        maxElement = currentElement;
    }

    const longestSequence = Array(maxLength).fill(maxElement);
    return longestSequence.join(' ');
}

console.log(longestSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]));