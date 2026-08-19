// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

// My Solution:

function capitalsFirst(str) {
  let capitals = [];
  let nonCap = [];

  for (let el of str.split(" ")) {
    if (el[0] >= "A" && el[0] <= "Z") {
      capitals.push(el);
    } else if (el[0] >= "a" && el[0] <= "z") {
      nonCap.push(el);
    }
  }

  return capitals.concat(nonCap).join(" ");
}
