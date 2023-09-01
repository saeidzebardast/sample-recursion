const factorial  = require('./factorial');

describe('Factorial Tests', () => {
    test('Should return correct factorial', () => {
        expect(factorial(0)).toEqual(1);
        expect(factorial(1)).toEqual(1);
        expect(factorial(5)).toEqual(120);
        expect(factorial(7)).toEqual(5040);
    });
});