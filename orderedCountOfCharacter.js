// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// My Solution:

const orderedCount = function (text) {
  let map = new Map();

  for (let ch of text) {
    if (!map.has(ch)) {
      map.set(ch, 1);
    } else {
      map.set(ch, map.get(ch) + 1);
    }
  }
  return Array.from(map.entries());
};
