function doubleChar(str) {
    let emptyStr = '';
    for (let string of str) {
        string = string + string;
        emptyStr = emptyStr + string;
    }
    return emptyStr;
}