// This is a follow up to my kata the old switcheroo.

// Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.

// 'abc'      --> '123'
// 'ABC'      --> '123'
// 'codewars' --> '315452311819'
// 'abc-#@5'  --> '123-#@5'

// My Solution:

function encode(str) {
  // Write code here.
  str = str.split("").map((x) => {
    if ((x >= "a" && x <= "z") || (x >= "A" && x <= "Z")) {
      return x.toLowerCase().charCodeAt(0) - 96;
    } else return x;
  });

  return str.join("");
}
