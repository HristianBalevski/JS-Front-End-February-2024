function solve(n, k) {
    let sequence = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let j = Math.max(0, sequence.length - k); j < sequence.length; j++) {
            sum += sequence[j];
        }

        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}



solve(6, 3)
solve(8, 2)