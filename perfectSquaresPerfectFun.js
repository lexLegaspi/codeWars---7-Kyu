// Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

// Examples:

// 1212 returns:

// "12
// 12"
// Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

// 123123123 returns:

// "123
// 123
// 123"
// Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.

// My Solution:

function squareIt(int) {
  int = String(int);

  let result = [];
  let root = Math.sqrt(int.length);
  if (!Number.isInteger(root)) return "Not a perfect square!";

  for (let i = 0; i < int.length; i += root) {
    if (result.length == 0) {
      result.push(int.slice(i, i + root));
    } else {
      result.push("\n" + int.slice(i, i + root));
    }
  }

  return result.join("");
}
