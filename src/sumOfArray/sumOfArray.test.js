const sumOfArray = require('./sumOfArray');

test('Sum of [1, 2, 3, 4, 5] equals 15', () => {
  expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
});