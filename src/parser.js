const { sum, substract, multiply, divide } = require("./Math");

const executeExpression = (expression) => {
    let sumExpression = expression.match(/([0-9]*)\+([0-9]*)/);
    if(sumExpression !== null){
        return sum(parseInt(sumExpression[1]),parseInt(sumExpression[2]));
    }
    let subExpression = expression.match(/([0-9]*)\-([0-9]*)/);
    if(subExpression !== null){
        return substract(parseInt(subExpression[1]),parseInt(subExpression[2]));
    }
    let mulExpression = expression.match(/([0-9]*)\*([0-9]*)/);
    if(mulExpression !== null){
        return multiply(parseInt(mulExpression[1]),parseInt(mulExpression[2]));
    }
    let divExpression = expression.match(/([0-9]*)\/([0-9]*)/);
    if(divExpression !== null){
        return divide(parseInt(divExpression[1]),parseInt(divExpression[2]));
    }
    throw new Error("expression parse failed")
}

module.exports = { executeExpression };