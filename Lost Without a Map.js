function maps(x) {
    const inputValue = x;
    let finalArray = [];
    for (const arr of inputValue) {
        const arrValue = arr * 2;
        finalArray.push(arrValue);
    }
    return finalArray;
}
const output = [2, 4, 2, 2];
console.log(maps(output));