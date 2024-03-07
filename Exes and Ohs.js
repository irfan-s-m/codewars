function XO(str) {
    const string = str.toLowerCase();
    let tempStringX = '';
    let tempStringO = '';
    [...string].forEach(element => {
        if (element === 'x') {
            tempStringX = tempStringX + element;
        }
        else if (element === 'o') {
            tempStringO = tempStringO + element;
        }
        else {
            return true;
        }
    });
    const lengthX = tempStringX.length;
    const lengthO = tempStringO.length;
    if (lengthX === lengthO) {
        return true;
    }
    else if ( lengthX != lengthO) {
        return false;
    }
}