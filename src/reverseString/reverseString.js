function reverseString(str) {
  if (str === "") return ""; // Base case
  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1)); // Recursive call
}

module.exports = reverseString;