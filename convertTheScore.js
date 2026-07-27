// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

// e.g. "The score is four nil" should return [4,0]

// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

// "new score: two three"

// "two two"

// "Arsenal just conceded another goal, two nil"
// Please rate and enjoy!

// My Solution:

function scoreboard(string) {
  // code here!
  string = string.split(" ");
  let score = [];
  let words = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < string.length; i++) {
    if (words.includes(string[i])) {
      score = [words.indexOf(string[i - 1]), words.indexOf(string[i])];
    }
  }
  return score;
}
