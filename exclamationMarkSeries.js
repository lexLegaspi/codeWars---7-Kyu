// Description:
// Count the number of exclamation marks and question marks, return the product.

// Examples
// ""          --->   0
// "!"         --->   0
// "!ab? ?"    --->   2
// "!!"        --->   0
// "!??"       --->   2
// "!???"      --->   3
// "!!!??"     --->   6
// "!!!???"    --->   9
// "!???!!"    --->   9
// "!????!!!?" --->  20

// My Solution:

function product (string) {
  //coding and coding....
  let que = string.split('?').length - 1
  let exc = string.split('!').length - 1
  return que*exc;
}