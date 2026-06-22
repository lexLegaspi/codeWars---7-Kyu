// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// My Solution:

function isItLetter(character) {
  return character.toLowerCase() >= "a" && character.toLowerCase() <= "z"
    ? true
    : false;
}
