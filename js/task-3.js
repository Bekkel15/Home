function getElementWidth(content, padding, border) {
    const c = parseFloat(content)
    const p = parseFloat(padding)
    const b = parseFloat(border)
    const borderbox = c + p * 2  + b * 2;
    return (borderbox)
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));