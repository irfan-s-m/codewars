function squareSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        const square = Math.pow(number, 2);
        sum = sum + square;
    }
    return sum;
}