function noSpace(x) {
    const noSpaceString = x.split(" ");
    let string = "";
    for (const singleString of noSpaceString) {
        string = singleString + string;
    }
    return string;
}

console.log(noSpace("5234h 234nsdj 24jk12 w 2 2 23  123231"));