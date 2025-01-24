const { sum, divide, multiply, substract, checkNumber } = require("../src/Math");

test('When i try to calculate the sum of two numbers, then i should get the sum result', () => {
    expect(sum(1, 5)).toBe(6);
    expect(sum(-10, 7)).toBe(-3);
    expect(sum(8.2, 19.9)).toBeCloseTo(28.1);
});

test('When i try to calculate the difference of two numbers, then i should get the difference result', () => {
    expect(substract(1, 5)).toBe(-4);
    expect(substract(-10, 7)).toBe(-17);
    expect(substract(8.2, 19.9)).toBeCloseTo(-11.7);
});

test('When i try to calculate the product of two numbers, then i should get the product result', () => {
    expect(multiply(1, 5)).toBe(5);
    expect(multiply(-10, 7)).toBe(-70);
    expect(multiply(8.2, 19.9)).toBeCloseTo(163.18);
});

describe('When i try to calculate the quotient of two numbers', () => {

    test('with valid numbers, then i should get the quotient result', () => {
        expect(divide(1, 5)).toBe(0.2);
        expect(divide(-20, 4)).toBe(-5);
        expect(divide(15.5, 5)).toBeCloseTo(3.1);
    });

    test('with 0 as dividend, then i should get an error', () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by 0");
    });

    test('with a string, then i should get an error', () => {
        expect(() => divide("10", "a")).toThrow("veuillez saisir des nombres");
    });
    
});


describe('When i try to calculate with strings', () => {

    test('with addition', () => {
        expect(() => sum('1', 5)).toThrow("veuillez saisir des nombres");
        expect(() => sum(-20, '4')).toThrow("veuillez saisir des nombres");
        expect(() => sum('15.5', '5')).toThrow("veuillez saisir des nombres");
    });

});

describe('When i checkNumber', () => {

    test('with an integer even, positive', () => {
        let result = { positive: true, decimal: false, even: true };
        expect(checkNumber(2)).toEqual(result);
    });

    test('with a decimal, positive', () => {
        let result = { positive: true, decimal: true, even: null };
        expect(checkNumber(3.5)).toEqual(result);
    });

    test('with a decimal, negative', () => {
        let result = { positive: false, decimal: true, even: null };
        expect(checkNumber(-79.8)).toEqual(result);
    });

    test('with an integer, negative, odd', () => {
        let result = { positive: false, decimal: false, even: false };
        expect(checkNumber(-1)).toEqual(result);
    });

    test('with a string', () => {
        expect(() => checkNumber('1')).toThrow('Param must be a number');
    });

    test('with an integer, negative, even', () => {
        let result = { positive: false, decimal: false, even: true };
        expect(checkNumber(-10)).toEqual(result);
    });

    test('with an integer, positive, odd', () => {
        let result = { positive: true, decimal: false, even: false };
        expect(checkNumber(1)).toEqual(result);
    });
})

