// You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.

// My Solution:

function twins(myArray) {
  // your code
  let isTrue = true;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray.filter((x) => x == myArray[i]).length !== 2) {
      isTrue = false;
    }
  }
  return isTrue;
}
