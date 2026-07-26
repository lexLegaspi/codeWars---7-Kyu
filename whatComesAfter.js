// You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

// If there is a number, punctuation or underscore following the letter, it should not be returned.

// If letter = 'r':
// "are you really learning Ruby?" # => "eenu"
// "Katy Perry is on the radio!"   # => "rya"
// "Pirates say arrrrrrrrr."       # => "arrrrrrrr"
// "r8 your friend"                # => "i"
// Return an empty string if there are no instances of letter in the given string.

// Adapted from: Ruby Kickstart

// My Solution:

function comes_after(str, l) {
  //code
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === l &&
      str[i + 1] &&
      str[i + 1].toUpperCase() !== str[i + 1].toLowerCase()
    ) {
      result += str[i + 1];
    }
  }
  return result;
}
