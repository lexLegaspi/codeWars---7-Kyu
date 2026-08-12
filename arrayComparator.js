// You have two arrays in this kata, every array contains unique elements only.
// Your task is to calculate number of elements in the first array which are
// also present in the second array.

// My Solution:

function matchArrays(v, r) {
  let count = 0;

  for (let el of v) {
    if (r.includes(el)) count++;
  }

  return count;
}
