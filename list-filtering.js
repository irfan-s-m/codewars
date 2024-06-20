function filter_list(l) {
    let newArray = [];
    const value = l.map(element => {
        const type = (typeof element);
        type === "number" && newArray.push(element)
    })
    return newArray;
}
console.log(filter_list([1, 2, 'a', 'b']))