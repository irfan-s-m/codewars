function reverseWords(str) {
    const splitStr = str.split("  ");
    let reverseStr = '';
    for (const arrayItem of splitStr) {
        for (const item of arrayItem) {
            reverseStr = item + reverseStr;
        }
    }
    const reverseArr = reverseStr.split(" ");
    const arr = reverseArr.reverse();
    const joinStr = arr.join(" ");
    return joinStr;
  }



  console.log(reverseWords("double  spaces"))