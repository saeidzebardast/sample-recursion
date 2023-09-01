const fibonacci  = require('./fibonacci');
    
describe('Fibonacci Tests', () => {
    test('Should return correct Fibonacci number', () => {
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacci(5)).toEqual(5);
        expect(fibonacci(10)).toEqual(55);
    });
});
