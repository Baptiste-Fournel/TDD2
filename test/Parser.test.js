const {executeExpression} = require("./../src/parser.js")
const {sum, divide, multiply, substract} = require("./../src/Math.js");

jest.mock('./../src/math.js',() => ({
    sum: jest.fn(() => 25),
    substract: jest.fn(() => 5),
    divide: jest.fn(() => 5),
    multiply: jest.fn(() => 5)
}));


describe("When i try to parse an expression,",() => {
    test("With a sum expression, then i should call the sum function",() => {
        let result = executeExpression("2+5");
        expect(sum).toHaveBeenCalledTimes(1);
    });
    test("With a divide expression, then i should call the divide function",() => {
        let result = executeExpression("4/2");
        expect(divide).toHaveBeenCalledTimes(1);
    });
    test("With a multiply expression, then i should call the multiply function",() => {
        let result = executeExpression("4*2");
        expect(multiply).toHaveBeenCalledTimes(1);

    });
    test("With a substract expression, then i should call the substract function",() => {
        let result = executeExpression("4-2");
        expect(substract).toHaveBeenCalledTimes(1);
    });

    test("With a wrong expression, then i throw a new error",() => {
        expect(() => executeExpression("abcde")).toThrow("expression parse failed");
    });

    
})