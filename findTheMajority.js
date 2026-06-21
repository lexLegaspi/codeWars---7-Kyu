// Goal
// Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

// If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

// Example
// majority(["A", "B", "A"]) returns "A"
// majority(["A", "B", "B", "A"]) returns null

// My Solution:

function majority(arr) {
  if (arr.length === 0) return null;

  const counts = {};

  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }

  const entries = Object.entries(counts);

  let maxCount = 0;
  let result = null;
  let ties = 0;

  for (const [value, count] of entries) {
    if (count > maxCount) {
      maxCount = count;
      result = value;
      ties = 1;
    } else if (count === maxCount) {
      ties++;
    }
  }

  return ties === 1 ? result : null;
}
