// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// divisor = 2, bound = 7 ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// divisor = 10, bound = 50 ==> return (50)

// My Solution:

function maxMultiple(divisor, bound) {
  //your code here
  let n = 1;
  let current = 0;
  while (n <= bound) {
    if (n % divisor == 0) {
      current = n;
    }
    n++;
  }
  return current;
}
