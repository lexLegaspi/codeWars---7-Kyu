// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// My Solution:

function sumOfIntegersInString(s) {
  let temp = [];

  while (s.length > 0) {
    if (s[0] >= "0" && s[0] <= "9") {
      temp.push(parseInt(s, 10));
      s = s.slice(String(parseInt(s, 10)).length);
    } else {
      s = s.slice(1);
    }
  }

  return temp.reduce((a, b) => a + b, 0);
}
