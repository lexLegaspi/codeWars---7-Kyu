// Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

// If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

// Note: The sum of an empty array is zero.

// [1, 2]      --> "11"
// [1, "a", 2] --> false / False (depending on the language)

// My Solution:

function arr2bin(arr) {
  //GET STARTED

  if (!arr.every((x) => Number.isInteger(x))) {
    return false;
  }

  return arr.reduce((a, b) => a + b, 0).toString(2);
}
