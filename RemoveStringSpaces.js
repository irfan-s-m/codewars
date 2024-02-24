function noSpace(x) {
    const noSpaceString = x.split(" ");
    let string = "";
    for (const singleString of noSpaceString) {
        string = singleString + string;
    }
    return string;
}