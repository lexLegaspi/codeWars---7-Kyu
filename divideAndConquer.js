// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My Solution:

function divCon(x) {
  let left = 0;
  let right = 0;
  for (let el of x) {
    if (typeof el === "number") {
      left += el;
    } else {
      right += Number(el);
    }
  }
  return left - right;
}
