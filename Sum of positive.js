function positiveSum(arr) {
    let sum = 0;
    const map = arr.map(x => {if (x>0) {
        sum = sum + x;
    }}
    )
    return sum;
}

console.log(positiveSum([12, -23, 23, -43, -2, 12, -34, -23, -54, 23]));