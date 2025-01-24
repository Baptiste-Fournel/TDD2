const sum = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("veuillez saisir des nombres");
    }
    return a + b;
}

const substract = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("veuillez saisir des nombres");
    }
    return a - b;
}

const multiply = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("veuillez saisir des nombres");
    }
    return a * b;
}

const divide = (dividend, divisor) => {
    if (typeof dividend !== "number" || typeof divisor !== "number") {
        throw new Error("veuillez saisir des nombres");
    }
    if (divisor > 0) {
        return dividend / divisor;
    } else {
        throw new Error("Cannot divide by 0")
    }
}

function checkNumber(number) {
    if(typeof number !== "number"){
        throw new Error("Param must be a number");
    }
    let result = { decimal: false, positive: false, even: null };
    if (parseInt(number) !== number) {
        result.decimal = true;
    }
    if (number >= 0) {
        result.positive = true;
    }
    if (!result.decimal) {
        if (number % 2 === 0) {
            result.even = true;
        } else {
            result.even = false;
        }
    }
    return result;
}


module.exports = { sum, substract,multiply, divide, checkNumber };
