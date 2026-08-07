// Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

// minimum(10, 6)  //= 2

// 10+2 = 12 which is a multiple of 6
// Note
// 0 is always a multiple of x
// Constraints
// 1 <= a <= 106

// 1 <= x <= 105

// My Solution:

function minimum(a, x) {
  // your solution here
  if (a === x) return 0;
  console.log(a + " " + x);
  let i = 1;

  while (true) {
    if ((a + i) % x == 0) return i;
    if ((a - i) % x == 0) return i;
    i++;
  }
}
