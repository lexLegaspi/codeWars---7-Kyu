// Description:
// Task
// Given an array of strings, reverse them and their order in such a way that their lengths stays the same as the lengths of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
// Good luck!

// My Soluttion:

const ultimateReverse = (s) => {
  let reversed = s.join("").split("").reverse().join("");
  s = s.map((x) => {
    x = reversed.slice(0, x.length);
    reversed = reversed.slice(x.length);
    return x;
  });
  return s;
};
