// In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

// Example: abbreviation => a2b2revi2ton

// My Solution:

const transform = (s) => {
  let counts = {};
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!counts[s[i]]) {
      counts[s[i]] = s.split(s[i]).length - 1;
    }
    if (counts[s[i]] < 2 && !result.includes(s[i])) {
      result += s[i];
    } else {
      if (!result.includes(s[i])) {
        result += s[i] + counts[s[i]];
      }
    }
  }

  return result;
};
