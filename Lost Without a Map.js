function maps(x) {
    const inputValue = x;
    let finalArray = [];
    for (const arr of inputValue) {
        const arrValue = arr * 2;
        finalArray.push(arrValue);
    }
    return finalArray;
}