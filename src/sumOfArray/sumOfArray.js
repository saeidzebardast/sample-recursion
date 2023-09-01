function sumOfArray(arr) {
  if (arr.length === 0) return 0; // Base case
  return arr[0] + sumOfArray(arr.slice(1)); // Recursive call
}


module.exports = sumOfArray