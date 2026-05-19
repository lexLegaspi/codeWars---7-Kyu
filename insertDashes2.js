// This is a follow up from my kata Insert Dashes.

// Write a function that takes a non-negative integer, insert dashes ('-') between each two odd digits and insert asterisks ('*') between each two nonzero even digits.

// For example:

// 454793 --> "4547-9-3"
// 1012356895 --> "10123-56*89-5"
// Note: Digit zero ('0') is not considered when inserting dashes or asterisks.

// My Solution:

function insertDashII(num) {
  //code me
  num = String(num);
  const isOdd = (n) => n % 2 !== 0;
  const isEven = (n) => n % 2 === 0;
  let result = "";
  for (let i = 0; i < num.length; i++) {
    if (
      isOdd(+num[i]) &&
      isOdd(+num[i + 1]) &&
      i + 1 < num.length &&
      +num[i + 1] !== 0 &&
      +num[i] !== 0
    ) {
      result += num[i] + "-";
    } else if (
      isEven(+num[i]) &&
      isEven(+num[i + 1]) &&
      i + 1 < num.length &&
      +num[i + 1] !== 0 &&
      +num[i] !== 0
    ) {
      result += num[i] + "*";
    } else {
      result += num[i];
    }
  }
  return result;
}
