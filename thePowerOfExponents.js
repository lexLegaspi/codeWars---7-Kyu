// This kata is based on: Exponent Method

// Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

// Unlike the Exponent Method, you should also take in account negative exponents.

// Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

// Note: The ** operator (JS: Math.pow) has been disabled.

// My Solution:

function power(base, exponent) {
  // ...
  let result = 1;
  let exp = exponent;
  if (exp < 1) {
    exp = -exp;
  }
  for (let i = 0; i < exp; i++) {
    result = result * base;
  }

  return exponent < 0 ? 1 / result : result;
}
