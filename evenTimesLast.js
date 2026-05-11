// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// My Solution:

function evenLast(numbers) {
  // Good luck
  if (numbers.length == 0) return 0;
  let result = 0;
  numbers.forEach((x, i) => {
    if (i % 2 == 0) {
      result += x;
    }
  });
  return result * numbers[numbers.length - 1];
}
