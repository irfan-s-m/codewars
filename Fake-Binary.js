function fakeBin(x) {
    const loopString = x;
    let finalString = "";
    for (const str of loopString) {
        if (str < 5) {
            finalString = finalString + "0";
        }
        else if (str>= 5) {
            finalString = finalString + "1";
        }
    }
    return finalString;
}

console.log(fakeBin("2372398429852"));