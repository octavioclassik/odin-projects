function add7(a) {
    return a + 7;
}

function multiply(a, b) {
    return a * b;
}

function capitalize(string) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1).toLowerCase();
}

function lastLetter(string) {
    return String(string).slice(-1)
}

console.log(add7(7))
console.log(multiply(7, 9))
console.log(capitalize("sometiMes I reAD"))
console.log(lastLetter("abcd"))
