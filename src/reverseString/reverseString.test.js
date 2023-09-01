const reverseString = require('./reverseString');

test('Reversed "hello" equals "olleh"', () => {
  expect(reverseString("hello")).toBe("olleh");
});