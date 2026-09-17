// You'll be passed a list/array of objects/dictionaries/hashes (depending on your language). You must sort them in descending order based on the value of the specified key.

// The values will always be numbers, and the properties will always exist.
// Your function should return a shallow copy of the input and not mutate the original list/array (i.e. not an in-place sort).
// The sorting should be stable: two elements with the same value for a given sorting key should retain their relative order in the array.
// Example
// When sorted by "a", this:

// [
//   {"a": 1, "b": 3},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 4, "b": 12}
// ]
// should return:

// [
//   {"a": 4, "b": 12},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 1, "b": 3}
// ]

// My Solution:

function sortList(sortBy, list) {
  let result = list;
  return [...list].sort((a, b) => b[sortBy] - a[sortBy]);
}
