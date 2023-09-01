function fibonacci(n) {
  if (n <= 1) return n; // Base cases
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive call
}

module.exports = fibonacci;