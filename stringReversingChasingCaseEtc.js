// Given 2 string parameters, show a concatenation of:

// the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
// a separator in between both strings: @@@
// the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
// ** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**

// My Solution:

function reverseAndMirror(s1, s2) {
  s2 = s2
    .split("")
    .map((x) => (x.charCodeAt(0) < 97 ? x.toLowerCase() : x.toUpperCase()))
    .reverse()
    .join("");

  s1 = s1
    .split("")
    .map((x) => (x.charCodeAt(0) < 97 ? x.toLowerCase() : x.toUpperCase()));

  let s1Rev = [...s1].reverse();

  return s2 + "@@@" + s1Rev.concat(s1).join("");
}
